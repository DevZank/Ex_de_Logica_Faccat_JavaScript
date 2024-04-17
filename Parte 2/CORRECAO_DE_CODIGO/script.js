let nome                // RCaractereal
let sexo                // Caractere
let altura              // Real
let pesoIdeal           // Real

nome = prompt("Escreva seu Primeiro Nome: ")
sexo = prompt("Escreva seu Sexo M/F: ")
altura = parseFloat(prompt("Escreva sua Altura: "))

if (sexo = "M") {
  pesoIdeal = 72.7 * altura - 58
  alert (`O peso ideal de ${nome} é de ${pesoIdeal.toFixed(2)}`)
} else if (sexo = "F") {
  pesoIdeal = 62.1 * altura - 44.7
  alert (`O peso ideal de ${nome} é de ${pesoIdeal.toFixed(2)}`)
} else {
  alert ("")
  alert ("ERRO: Você colocou um valor invalido para SEXO")
}

