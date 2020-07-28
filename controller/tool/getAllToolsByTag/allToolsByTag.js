module.exports = app => {

    const { Tools, Op } = app.models.tool.DataToolModel;

    /**
     * Recebe a tag pelo parametro da url
     * e verifica se é valido, depois realiza
     * uma busca das ferramentas que contém essa
     * tag no campo tags, caso exista retorna a lista
     * de todas as ferramentas por ordem crescente,
     * se não é dado sem registros
     */
    const allToolsByTag = (req, res) => {

        const tag = req.params.tag;

        if (tag.trim()=="" || tag == undefined) {
            return res.status(400).json({err: { msg: "Tag inválida, por favor verifique!"} });
        }

        Tools.findAll({
            raw: true, 
            order: [
                ["id", "asc"]
            ],
            where: {
                tags:{
                    [Op.contains]:[tag] 
                }
            }
        }).then(tools => {

            if(tools.length == 0){
                return res.status(404).json({ msg: "Ferramentas que contém a tag especificada não há registros!"} );
             }

            res.status(200).json(tools);

        }).catch(err => {
            res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
        });
    }

    return { allToolsByTag };
}