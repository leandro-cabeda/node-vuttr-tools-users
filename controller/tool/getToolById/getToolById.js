module.exports = app => {

    const { Tools } = app.models.tool.DataToolModel;

    /**
     * Recebe o id pelo parametro da url
     * e verifica se é valido e procura
     * a ferramenta para validar se existe, caso
     * exista ai é retornado, se não é dado
     * de não encontrado a ferramenta
     */
    const getToolById=(req, res) => {

        const id = req.params.id;

        if (isNaN(id) || id == undefined) {
            return res.status(400).json({err: { msg: "Id inválido, por favor verifique!"} });
        }

        Tools.findByPk(id)
            .then(tool => {
                
                if(tool == undefined){
                   return res.status(404).json({ msg: "Id da ferramenta não encontrado!"} );
                }

                res.status(200).json(tool);
            })
            .catch(err => {
                res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
            });

    }
    return { getToolById };
}