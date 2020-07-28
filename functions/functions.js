const jwt = require('jsonwebtoken');
const secret= "kjiw#$kk@lç*&jm";

/**
 * Faz uma verificação ao header do authorization
 * contendo o token e valida se o token ainda está ativo,
 * ou expirou ou ainda não existe, nisso controla
 * as requisições das demais rotas para proteger o acesso
 * caso usuário não esteja autenticado. 
 * 
 */
function sessionToken(req, res, next) {
  
  let auth = req.headers.authorization.split(' ')[1];

  if (auth) {
      jwt.verify(auth,secret, function (err) {
          if (err) {
              res.status(401).json("Token inválido, precisa realizar a autenticação!");
          } else {
              next(); 
          }
      });

  } else {
    res.status(401).json("Usuário não autorizado para acessar essa url, precisa se autenticar primeiro!");
  }
  
}

/*
 * Cria o token com as credenciais do usuário
  definido pela chave 'secret' e o tempo de expiração
  como no exemplo abaixo foi dado dois minutos
 */
function createToken(user){

  let token = jwt.sign({
    email: user.email,
    password: user.password
},
    secret,
    {
        expiresIn: 120
    });

    return token;
}


/**
 * Recebe o objeto user e valida os campos
 * caso contem erros e atribuido dentro da
 * variavel erros retornando um vetor com mensagens.
 */
const verifyDataUser=(erros, user)=>{

  if(user.email==undefined){
    erros.push({msg:"Email inválido ou nulo, por favor inseria um email!"});
  }
  else if(user.email.trim()==""){
    erros.push({msg:"Email em branco, por favor preencha o campo do email!"});
  }

  if(user.password==undefined){
      erros.push({msg:"Password inválido ou nulo, por favor inseria um password!"});
  }
  else if(user.password.trim()==""){
    erros.push({msg:"Password em branco, por favor preencha o campo do password!"});
  }

  return erros;

}

/**
 * Recebe o objeto tool e valida os campos
 * caso contem erros e atribuido dentro da
 * variavel erros retornando um vetor com mensagens.
 */
const verifyDataTools=(erros, tool)=>{

  if(tool.title==undefined){
    erros.push({msg:"Titulo inválido ou nulo, por favor insira um title!"});
  }
  else if(tool.title.trim()==""){
    erros.push({msg:"Titulo em branco, por favor preencha o campo do title!"});
  }

  if(tool.link==undefined){
      erros.push({msg:"Link inválido ou nulo, por favor insira um link!"});
  }
  else if(tool.link.trim()==""){
    erros.push({msg:"Link em branco, por favor preencha o campo do link!"});
  }

  if(tool.description==undefined){
    erros.push({msg:"Descrição inválido ou nulo, por favor insira uma description!"});
  }
  else if(tool.description.trim()==""){
    erros.push({msg:"Descrição em branco, por favor preencha o campo da description!"});
  }

  if(tool.tags==undefined){
    erros.push({msg:"Tags inválido ou nulo, por favor insira uma ou mais tags!"});
  }
  else if(tool.tags.length==0){
    erros.push({msg:"Tags em branco, por favor preencha o campo tags!"});
  }

  return erros;
}

/**
 * Função que retorna cada
 * outra função acima como objetos e
 * são exportadas para poderem ser usadas 
 * em outros lugares
 */
const functions=()=>{
  return {
    sessionToken,
    createToken,
    verifyDataUser,
    verifyDataTools
  }
}

module.exports=functions;