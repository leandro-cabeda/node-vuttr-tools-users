const swaggerJSDoc = require('swagger-jsdoc');

/* swagger configuração: Definição
  Configuração de toda estrutura inicial
  do Swagger contendo suas definições
  e atributos
*/
const swaggerDefinition = {
    info: {
      title: 'Vuttr API',
      version: '1.0.0',
      description: 'Aplicação de API da Vuttr de cadastro de ferramentas',
      termsOfService: "http://swagger.io/terms/",
      contact: {
        name:"Leandro Cabeda Rigo",
        email: "leandro.cabeda@hotmail.com"
      },
      license: {
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ["http","https"],
    externalDocs: {
      description: "Pesquisar mais sobre o Swagger",
      url: "http://swagger.io"
    }
  };
  
  // adiciona as opções para o swagger
  const options = {
    // importar o swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path para as API onde será documentado os arquivos importantes
    apis: ['./route/**/*.js','./models/**/*.js'],
  };
  
  // inicializa swagger-jsdoc
 const swaggerSpec = swaggerJSDoc(options);

 // Exporta o swaggerSpec para ser usado no index principal
 module.exports=swaggerSpec;
 