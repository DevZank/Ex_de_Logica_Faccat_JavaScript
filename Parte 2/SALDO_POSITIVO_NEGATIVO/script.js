let numConta           // Inteiro
let saldoConta         // Real
let debitoConta        // Real
let creditoConta       // Real

let saldoAtual         // Real

numConta = parseInt(prompt("Escreva o Numero da Conta: "))
saldoConta = parseFloat(prompt("Escreva o Saldo da Conta: "))
debitoConta = parseFloat(prompt("Escreva o Débito da Conta: "))
creditoConta = parseFloat(prompt("Escreva o Crédito da Conta: "))

saldoAtual = saldoConta - debitoConta + creditoConta
alert (`Seu saldo é: ${saldoAtual}`)

if (saldoAtual >= 0) {
  alert ("SEU SALDO É POSITIVO!")
} else {
  alert ("SEU SALDO É NEGATIVO!")
}