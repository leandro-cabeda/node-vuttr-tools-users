const app = require("./server/server");

// Recebe a porta se contém na variavel de ambiente ou recebe a porta 3000
const port = process.env.PORT || 3000;

// Importa a conexão do banco e o swaggerSpec
const { Connect }= app.database.database;
const swaggerSpec= app.swaggerConfig.config;

// Realiza a conexão com banco postgreSQL
Connect.authenticate()
  .then(() => {
    console.log("Conexão estabelicida com PostgreSql");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

/* Acesso a configuração do swagger básica e envia as configurações
   para a interface do swagger contida na pasta api-docs
*/
app.get("/swagger.json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(swaggerSpec);
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Bem vindo API Vuttr!</h1>");
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}.`);
});
