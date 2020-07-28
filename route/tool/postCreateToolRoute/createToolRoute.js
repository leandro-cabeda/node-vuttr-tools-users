module.exports = (app) => {
  const { createTool } = app.controller.tool.postCreateTool.createTool;
  const { sessionToken } = app.functions.functions;

  /**
   * @swagger
   *
   * /tools:
   *   post:
   *     tags:
   *       - Tools Endpoint
   *     description: Usuário cria uma nova ferramenta
   *     summary: Usuário cadastra uma nova ferramenta
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: title
   *         description: Titulo da ferramenta
   *         example: 'Notion'
   *         in: body
   *         required: true
   *         type: string
   *       - name: link
   *         description: Link da url da ferramenta
   *         example: 'https://notion.so'
   *         in: body
   *         required: true
   *         type: string
   *       - name: description
   *         description: Descrição da ferramenta
   *         example: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.'
   *         in: body
   *         required: true
   *         type: string
   *       - name: tags
   *         description: Tags que a ferramenta contém de importante do assunto
   *         example:
   *            - 'organization'
   *            - 'planning'
   *            - 'collaboration'
   *         in: body
   *         required: true
   *         type: array
   *     security:
   *       bearerAuth:
   *          type: http
   *          scheme: bearer
   *          bearerFormat: JWT
   *     responses:
   *       201:
   *         description: Cadrastrado a ferramenta com sucesso!
   *         schema:
   *             $ref: '#/definitions/Tools'
   *       400:
   *         description: Inválido ao cadastrar a ferramenta!
   *       401:
   *         description: Autorização não permetida para cadastrar a ferramenta!
   *       403:
   *         description: Autorização negada para cadastrar a ferramenta!
   *       500:
   *         description: Ocorreu erro inesperado no servidor!
   */
  app.post("/tools", sessionToken, createTool);
};
