module.exports = app => {

    const { authUser }= app.controller.user.postAuthUser.authUser;

   /**
   * @swagger
   *
   * /users/auth:
   *   post:
   *     tags:
   *       - Users Endpoint
   *     description: Usuário autentica
   *     summary: Usário realiza a autenticação com suas credenciais
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
   *       200:
   *         description: Usuário autenticado com sucesso!
   *       400:
   *         description: Inválido ao realizar autenticação do usuário!
   *       500:
   *         description: Ocorreu erro inesperado no servidor!
   */
    app.post("/users/auth",authUser);

}