module.exports = app => {

    const { getToolById }= app.controller.tool.getToolById.getToolById;
    const { sessionToken } = app.functions.functions;

   /**
   * @swagger
   *
   * /tools/id/:id:
   *   get:
   *     tags:
   *       - Tools Endpoint
   *     description: Retorna a ferramenta pelo id especificado
   *     summary: Busca a ferramenta cadastrada pelo id especificado no parametro da url
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
   *       200:
   *         description: Retornado a ferramenta pelo id com sucesso!
   *         schema:
   *             $ref: '#/definitions/Tools'
   *       400:
   *         description: Inválido ao buscar a ferramenta pelo id!
   *       401:
   *         description: Autorização não permetida para buscar a ferramenta pelo id!
   *       403:
   *         description: Autorização negada para buscar a ferramenta pelo id!
   *       404:
   *         description: Id não encontrado!
   *       500:
   *         description: Ocorreu erro inesperado no servidor!
   */
    app.get("/tools/id/:id", sessionToken, getToolById);

}