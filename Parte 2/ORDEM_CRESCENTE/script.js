let valorA        // Real
let valorB        // Real

valorA = parseFloat(prompt("Digite um Numero: "))
valorB = parseFloat(prompt("Digite outro Numero: "))

if (valorA < valorB) {
  alert (`A ordem Crescente dos Valores é: ${valorA}, ${valorB}`)
} else {
  alert (`A ordem Crescente dos Valores é: ${valorB}, ${valorA}`)
}