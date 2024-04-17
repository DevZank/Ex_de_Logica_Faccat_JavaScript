let anoAtual         // Inteiro
let anoNascimento    // Inteiro
let idade            // Inteiro 

anoAtual = parseInt(prompt("Digite o ano Atual: "))
anoNascimento = parseInt(prompt("Digite o seu ano de Nascimento: "))

idade = anoAtual - anoNascimento

if (idade <= 18) {
  alert ("VOCÊ PODERA VOTAR ESSE ANO! ")
} else {
  alert ("VOCÊ NÃO PODERA VOTAR ESSE ANO! ")
}