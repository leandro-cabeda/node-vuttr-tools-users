module.exports = app => {

    const { verifyDataTools } = app.functions.functions;
    const { Tools, Op } = app.models.tool.DataToolModel;

    /**
     *  Realiza primeiro a validação dos campos da ferramenta,
     * caso tudo for válido, faz uma busca primeiro
     * se essa ferramenta existe cadastrada, caso exista,
     * retorna uma mensagem contendo que já existe cadastrado,
     * se não é criada a ferramenta e retornado a instancia dela
     */
    const createTool= (req, res) => {

        const tool = req.body;
        let erros=[];

        erros=verifyDataTools(erros,tool);

        if (erros.length > 0) {
            return res.status(400).json({ errs:erros});
        }

        Tools.findOne({
            where: {
                [Op.or]: [
                    {title: tool.title}, 
                    {link: tool.link}
                ]
            }
        }).then(toolFind => {

            if (toolFind != undefined) {

                return res.status(400).json({ err: {msg:"Esta ferramenta já está cadastrado"} });
            }
            else {

                Tools.create({
                    title: tool.title,
                    link: tool.link,
                    description: tool.description,
                    tags:tool.tags
                }).then(toolCreate => {
                    res.status(201).json(toolCreate);
                }).catch(err => {
                    res.status(500).json({ err: {msg:"Ocorreu falha durante a conexão do banco. Err: "+err} });
                });
            }

        }).catch(err => {
            res.status(500).json({ err: {msg:"Ocorreu falha durante a conexão do banco. Err: "+err} });
        });
    }

    return { createTool };
}