module.exports = (app) => {
  const { createUser } = app.controller.user.postCreateUser.createUser;


  /**
   * @swagger
   *
   * /users/create:
   *   post:
   *     tags:
   *       - Users Endpoint
   *     description: Cria um novo usuário
   *     summary: Usuário cria uma conta nova
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         description: Email do usuário
   *         example: leo@hotmail.com
   *         in: body
   *         required: true
   *         type: string
   *       - name: password
   *         description: Password do usuário
   *         example: '123'
   *         in: body
   *         required: true
   *         type: string
   *     responses:
   *       201:
   *         description: Criado usuário com sucesso!
   *       400:
   *         description: Inválido ao criar um novo usuário!
   *       500:
   *         description: Ocorreu erro inesperado no servidor!
   */
  app.post("/users/create", createUser);
};
