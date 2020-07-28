const express = require("express");
const app = express();
const consign = require("consign");

/**
 * Definido o método static onde contém
 * a interface do swagger para visualização
 * com isso pode ser acessado depois na url,
 * e também definido umas propriedades.
 */
app.use(express.static("api-docs",{
    index:false,
    immutable:true,
    cacheControl:true
}));


/**
 * Consign realiza o compartilhamento
 * de todos os arquivos contido no projeto
 * se estiverem definidos como exemplo abaixo,
 * com isso ele acessa e  administra toda aplicação
 * como fosse um só arquivo com toda estrutura
 */
consign()
.then("./database/database.js")
.then("./middlewares")
.then("./functions/functions.js")
.then("./swaggerConfig/config.js")
.then("./models")
.then("./controller")
.then("./route")
.into(app);

/**
 * Exporta o app contido 
 * toda a configuração anterior
 */
module.exports=app;