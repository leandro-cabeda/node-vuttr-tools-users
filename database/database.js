const Sequelize=require("sequelize");

/**
 * Configuração do banco de dados PostgreSQL
 * com Sequelize e suas definições primarias
 */
const Connect=new Sequelize(
    "vuttr",
    "postgres",
    "",{
    host:"localhost",
    dialect:"postgres",
    timezone: "-03:00",
    define: { timestamps: false } // Não cria as colunas de datas(createdAt e updatedAt) no banco
});

/**
 * Exporta a conexão e sequelize para poder
 * ser usados em outros lugares.
 */
module.exports={
    Connect,
    Sequelize
};