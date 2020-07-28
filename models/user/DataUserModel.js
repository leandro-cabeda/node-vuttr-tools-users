module.exports = app => {
  const { Connect, Sequelize } = app.database.database;

  /**
   * @swagger
   * definition:
   *   Users:
   *     description: Classe que representa o modelo dos usuários
   *     required:
   *       - email
   *       - password
   *     properties:
   *       email:
   *         type: string
   *         description: Email do usuário
   *       password:
   *         type: string
   *         description: Senha do usuário
   */
  const Users = Connect.define("users", {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  /*Aqui é forçado a criação do modelo 
    mapeado dos Users para o banco 
  */
  Users.sync({ force: false });

  /**
   * Retorna o modelo dos Users onde é criado
   * e definido suas propriedades
   */
  return { Users };
};
