const bcrypt = require("bcryptjs");

module.exports = app => {

    const { createToken,verifyDataUser } = app.functions.functions;
    const { Users } = app.models.user.DataUserModel;

    /**
     *  Realiza primeiro a validação dos campos do usuário,
     * caso tudo for válido, faz uma busca primeiro
     * se esse usuário existe cadastrado, caso não exista,
     * retorna uma mensagem contendo que não existe cadastrado,
     * caso contrário faz uma verificação da senha dele se bate com 
     * a senha contida no registro, se estiver tudo certo
     * o usuário fica autenticado pelas requisições pelo header
     * das outras rotas da aplicação com o token e retornado também,
     * se não retorna mensagem que a senha não corresponde.
     */
    const authUser=(req, res) => {

        const user = req.body;
        let erros = [];
        
        erros=verifyDataUser(erros,user);

        if (erros.length > 0) {
            return res.status(400).json({ errs:erros });
        }

        Users.findOne({
            where: {
                email: user.email
            }
        }).then(use => {

            if (use == undefined) {

               return res.status(400).json({ err: {msg:"Usuário não cadastrado!"} });
            }
            else {
                bcrypt.compare(user.password, use.password, (err, resp) => {
                    if (err){
                      return res.status(400).json( {err: {msg:"Ocorreu seguinte erro: "+err} });
                    }
                    if (resp){
                       const token = createToken(user);
                       req.headers.authorization="Bearer "+token;
                       return res.status(200).json({token});
                    }else{
                      return res.status(400).json({err: {msg:"Password do usuário inválido!"} });
                    }
                });
            }
        }).catch(err => {
            res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
        });

    };
    return { authUser };
}