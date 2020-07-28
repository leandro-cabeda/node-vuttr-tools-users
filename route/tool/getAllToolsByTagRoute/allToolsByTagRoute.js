module.exports = (app) => {
  const { allToolsByTag } = app.controller.tool.getAllToolsByTag.allToolsByTag;
  const { sessionToken } = app.functions.functions;

  /**
   * @swagger
   *
   * /tools/:tag:
   *   get:
   *     tags:
   *       - Tools Endpoint
   *     description: Retorna toda a lista das ferramentas pela tag especificada
   *     summary: Lista todas as ferramentas cadastradas pela tag especificada no parametro da url
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: tag
   *         description: Tag contida nas ferramentas cadastradas
   *         example: node
   *         in: path
   *         required: true
   *         type: string
   *     security:
   *       bearerAuth:
   *          type: http
   *          scheme: bearer
   *          bearerFormat: JWT
   *     responses:
   *       200:
   *         description: Retornado a lista de ferramentas contendo a tag especificada com sucesso!
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/Tools'
   *       400:
   *         description: Inválido ao buscar as ferramentas pela tag especificada!
   *       401:
   *         description: Autorização não permetida para buscar as ferramentas pela tag especificada!
   *       403:
   *         description: Autorização negada para buscar as ferramentas pela tag especificada!
   *       404:
   *         description: Ferramentas que contém a tag especificada não há registros!
   *       500:
   *         description: Ocorreu erro inesperado no servidor!
   */
  app.get("/tools/:tag", sessionToken, allToolsByTag);
};
