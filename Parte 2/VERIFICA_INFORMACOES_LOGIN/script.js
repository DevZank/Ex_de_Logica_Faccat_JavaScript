let codigoUser       // Inteiro
let senhaUser        // Inteiro

let codigoCerto      // Inteiro
let senhaCerto       // Inteiro

codigoCerto = 1234
senhaCerto = 9999

codigoUser = parseInt(prompt("Digite o Codigo de Usuario: "))

if (codigoUser == codigoCerto) {
  senhaUser = parseInt(prompt("Digite a Senha de Usuario: "))
  if (senhaUser == senhaCerto) {
    alert ("Acesso Permitido") 
  } else {
    alert ("Senha Incorreta")  
  }
} else {
  alert ("Usuario Invalido")
}