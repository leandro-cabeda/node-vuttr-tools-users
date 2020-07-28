const bodyParser = require("body-parser");
const cors = require("cors");

/**
 * Aqui é inserido os middlewares
 * que ficaram disponiveis em todo
 * contexto da aplicação da api
 *
 */
module.exports = (app) => {

  app.use(bodyParser.json());

  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(
    cors({
      origin: "*",
    })
  );
  
};
