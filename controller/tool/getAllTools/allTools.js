module.exports = app => {

    const { Tools } = app.models.tool.DataToolModel;

    /**
     *  Busca a lista de todas as ferramentas
     *  por ordem crescente
     */
    const allTools = (req, res) => {

        Tools.findAll({
            raw: true, order: [
                ["id", "asc"]
            ]
        }).then(tools => {

            res.status(200).json(tools);

        }).catch(err => {
            res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
        });
    }
    return { allTools };
}