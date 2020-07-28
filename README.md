# Desafio Projeto Vuttr Ferramentas

Desafio realizado com framework Express, Interpretador JavaScript NodeJS, implementando uma API REST de cadastrado de ferramentas e usuários. Acesso as ferramentas só com autenticação do usuário.

## **Configuração!**
Necessita configurar senha do banco na pasta e arquivo ./database/database.js, nele contém toda configuração necessária.

## **Ferramentas usadas e Porque!**

**1. Express:**
- Express por ser um framework que disponibiliza diversas ferramentas para trabalhar com implementação de API´s mais estruturado.

**2. PostgreSQL:** Banco de dados relacional
- Por gerenciar toda estrutura relacional e ser fácil de trabalhar, e ainda por ter vanatagem de ter campos do tipo Array.

**3. NodeJS:**
- NodeJS é um ótimo interpretador de JavaScript, apesar de poder desenvolver Api´s do lado back-end muito fácil e simples.

**4. Swagger:** (swagger-jsdoc) para Documentação de API
- Swagger é uma ferramenta espetacular para documentação de API onde o usuário irá poder ver como funciona e ainda poder testar direto na web pela sua interface.
-  Esta biblioteca oferece recursos ótimos para configurar o swagger no NodeJS dentro da aplicação

**5. JWT:** Autenticação com JWT (jsonwebtoken)
- É recomando de maioria das API´s implementar autenticação por JWT pela segurança e também por controlar o acesso do usuário.
- Esta biblioteca é bem tranquila de configurar e como tratar verificação através pela requisição do header authorization.

**6. Bcrypt:** (bcryptjs) Encryptação de dados
- Esta biblioteca é muito útil para encryptar dados ainda mais sendo senha  de usuários onde será armazenado um hash no banco invez da propria senha, mas no final é a senha que usuário cadastrou, mas em modo hash.

**7. Body Parser:** (body-parser) Biblioteca para os tratamentos de requisição vinda pelo corpo
- Ele é uma biblioteca muito útil e recomendada a ser usada.
- Os usuários enviam dados pelo corpo da requisição e nisso ele transcreve em modo mais utilizado hoje em dia como caso Json e com isso fica facil de trabalhar e manipular estes dados com verificação e análise.

**8. Consign:** Compartilhador de estruturas de arquivos
- Ele é uma biblioteca fundamental para compartilhar arquivos de vários pastas e arquivos contendo dentro do projeto.
- Assim ele faz uma varrida em todos e sicroniza o projeto em si como fosse em um único modulo.

**9. Cors:** Habilita a sicronização de vários hosts diferentes
- Ele é uma biblioteca muito útil para poder fazer que vários hosts diferentes podem ser acessados entre eles.

**10. PG:** Driver de conexão para ponte de acesso ao banco PostgreSQL
- Ele é um driver onde realiza a conexão com banco de dados, como fosse uma ponte do app até o banco.

**11. Sequelize:** Modelagem de mapeador de estrutura de dados
- Ele é uma biblioteca muito útil no qual sua função é modelar e mapear uma estrutura de dados configurado para depois aplicar no banco de dados como por exemplo: JPA com Java.

## **Instruções para Rodar**
1. Executar comando: npm i --save ou npm install --save
2. Criar uma Database com nome: vuttr
 - Mas fica livre o nome da Database que for escolher ao mudar.
3. Executar o comando: npm start
- Isto faz subir aplicação e depois so acessar a url localhost
- Porta padrão e definida é a 3000

## **Testar a Aplicação**
- Pode realizar o teste via Postman que irei mandar junto com projeto e depois só importar.
- Postman Environment
- Postman Collection

## **Usuário de teste**
- Pode acessar a url de cadastro de usuários para criar uma conta.
- Pode também depois se autenticar pela url de usuários.

## **Informações pelo email**
Qualquer dúvida, por favor, entre em contato com **[Leandro](mailto:leandro.cabeda@hotmail.com)**.

## **Link Acesso Swagger Documentação API Local Interface**
Projeto-API-Swagger link: http://localhost:3000/index.html

## **Link Acesso Swagger Definições da Documentação Local JSON API**
Projeto-API-Swagger link: http://localhost:3000/swagger.json

## **Link Acesso Swagger Documentação API Heroku Web Interface**
Projeto-API-Swagger [Heroku-Projeto-API-Swagger-Ui](https://vuttr-tools-api.herokuapp.com/index.html)

## **Link Acesso Swagger Definições da Documentação Web JSON API**
Projeto-API-Swagger [Heroku-Projeto-API-Swagger-Json](https://vuttr-tools-api.herokuapp.com/swagger.json)

## **Link Acesso API Boas Vindas Web**
Projeto-API-Welcome [Heroku-Projeto-API-Welcome](https://vuttr-tools-api.herokuapp.com)

## **Link Repositorio Heroku API**
Acesse url [Heroku-Projeto-API-Git](https://git.heroku.com/vuttr-tools-api.git)

## **Link GitHub Desafio Projeto API**
Acesse url [GitHub-Projeto-API](https://github.com/leandro-cabeda/node-vuttr-tools-users)