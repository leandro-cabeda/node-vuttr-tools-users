module.exports = (app) => {
  const { allTools } = app.controller.tool.getAllTools.allTools;
  const { sessionToken } = app.functions.functions;

  /**
   * @swagger
   *
   * /tools:
   *   get:
   *     tags:
   *       - Tools Endpoint
   *     description: Retorna toda a lista das ferramentas
   *     summary: Lista todas as ferramentas cadastradas
   *     produces:
   *       - application/json
   *     security:
   *       bearerAuth:
   *          type: http
   *          scheme: bearer
   *          bearerFormat: JWT
   *     responses:
   *       200:
   *         description: Retornado a lista de ferramentas com sucesso!
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/Tools'
   *       401:
   *         description: Autorização não permetida para buscar a lista de ferramentas!
   *       403:
   *         description: Autorização negada para buscar a lista de ferramentas!
   *       500:
   *         description: Ocorreu erro inesperado no servidor!
   */
  app.get("/tools", sessionToken, allTools);
};
