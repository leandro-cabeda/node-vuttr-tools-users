module.exports = app => {

    const { deleteToolById }= app.controller.tool.deleteToolById.deleteToolById;
    const { sessionToken } = app.functions.functions;

  /**
   * @swagger
   *
   * /tools/:id:
   *   delete:
   *     tags:
   *       - Tools Endpoint
   *     description: Deleta a ferramenta pelo id especificado
   *     summary: Deleta a ferramenta cadastrada pelo id especificado no parametro da url
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Id da ferramenta cadastrada
   *         example: 1
   *         in: path
   *         required: true
   *         type: integer
   *     security:
   *       bearerAuth:
   *          type: http
   *          scheme: bearer
   *          bearerFormat: JWT
   *     responses:
   *       204:
   *         description: Deletado a ferramenta pelo id com sucesso!
   *       400:
   *         description: Inválido ao deletar a ferramenta pelo id!
   *       401:
   *         description: Autorização não permetida para deletar a ferramenta pelo id!
   *       403:
   *         description: Autorização negada para deletar a ferramenta pelo id!
   *       404:
   *         description: Id não encontrado!
   *       500:
   *         description: Ocorreu erro inesperado no servidor!
   */
    app.delete("/tools/:id", sessionToken, deleteToolById);
}