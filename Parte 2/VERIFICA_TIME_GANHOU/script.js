let time1          // Caractere
let time2          // Caractere

let numgols1       // Inteiro
let numgols2       // Inteiro

time1 = prompt("Escreva o nome do 1º Time: ")
time2 = prompt("Escreva o nome do 2º Time: ")

numgols1 = parseInt(prompt(`Digite o numero de Gols de ${time1}: `))
numgols2 = parseInt(prompt(`Digite o numero de Gols de ${time2}: `))

if (numgols1 > numgols2) {
  alert (`${time1} GANHOU!!!`)
} else if (numgols2 > numgols1) {
  alert (`${time2} GANHOU!!!`)  
} else {
  alert (`EMPATE`)
}