const bcrypt = require("bcryptjs");
module.exports = app => {

    const { createToken,verifyDataUser } = app.functions.functions;
    const { Users } = app.models.user.DataUserModel;

    /**
     *  Realiza primeiro a validação dos campos do usuário,
     * caso tudo for válido, faz uma busca primeiro
     * se esse usuário existe cadastrado, caso exista,
     * retorna uma mensagem contendo que já existe cadastrado,
     * se não é criada o usuário e encryptado sua senha, com isso
     * o usuário fica autenticado pelas requisições pelo header
     * das outras rotas da aplicação com o token e retornado também
     */
    const createUser = (req, res) => {

        const user = req.body;
        let erros=[];
        
        erros=verifyDataUser(erros,user);

        if (erros.length > 0) {
            return res.status(400).json({ errs:erros });
        }

        Users.findOne({
            where: {
                email: user.email
            }
        }).then(useFindEmail => {

            if (useFindEmail != undefined) {

                return res.status(400).json({err: {msg:"Esta conta de usuário já está cadastrado"} });
            }
            else {

                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(user.password, salt);

                Users.create({
                    email: user.email,
                    password: hash
                }).then(() => {

                    const token = createToken(user);
                    req.headers.authorization="Bearer "+token;
                    res.status(201).json({token});

                }).catch(err => {
                    res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
                });
            }

        }).catch(err => {
            res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
        });

    }
    return {createUser};
}