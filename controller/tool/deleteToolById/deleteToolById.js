module.exports = app => {

    const { Tools } = app.models.tool.DataToolModel;

    /**
     * Recebe o id pelo parametro da url
     * e verifica se é valido e procura primeiro
     * a ferramenta para validar se existe, caso
     * exista ai é deletado, se não é dado
     * de não encontrado a ferramenta
     */
    const deleteToolById=(req, res) => {

        const id = req.params.id;

        if (isNaN(id) || id == undefined) {
            return res.status(400).json({err: { msg: "Id inválido, por favor verifique!"} });
        }

        Tools.findByPk(id)
           .then(tool => {
                
              if(tool == undefined){
                 return res.status(404).json({ msg: "Id da ferramenta não encontrado!"} );
               }
            
               Tools.destroy({
                where: { id }
               }).then(() => {
    
                 res.status(204).json();
               }).catch(err => {
                 res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
               });
                
            })
            .catch(err => {
                res.status(500).json({ err: { msg: "Ocorreu falha durante a conexão do banco. Err: " + err } });
            });
    }
    return { deleteToolById };
}