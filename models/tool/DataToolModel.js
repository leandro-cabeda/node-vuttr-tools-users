module.exports = (app) => {
  const { Connect, Sequelize } = app.database.database;

  /**
   * @swagger
   * definition:
   *   Tools:
   *     description: Classe que representa o modelo das ferramentas
   *     required:
   *       - title
   *       - link
   *       - description
   *       - tags
   *     properties:
   *       title:
   *         type: string
   *         description: Titulo  da ferramenta
   *       link:
   *         type: string
   *         description: Link da url da ferramenta
   *       description:
   *         type: string
   *         description: Descrição da ferramenta
   *       tags:
   *         type: array
   *         items:
   *           type:
   *           - string
   *         description: As tags citadas referente a ferramenta
   */
  const Tools = Connect.define("tools", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tags: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
  });

  /*Aqui é forçado a criação do modelo 
    mapeado da Tools para o banco 
  */
  Tools.sync({ force: false });

  /**
   * Retorna o modelo das Tools onde é criado
   * e definido suas propriedades, além de retornar
   * a propriedade Op que Sequelize contém para ser usada
   * nas consultas mais definidas
   */
  return { Tools,  Op:Sequelize.Op };
};
