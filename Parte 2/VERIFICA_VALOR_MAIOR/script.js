let valorA         // Real
let valorB         // Real

valorA = parseFloat(prompt("Digite o valor de A: "))
valorB = parseFloat(prompt("Digite o valor de B (Que seja diferente de A): "))

if (valorA > valorB) {
  alert (`O valor A: ${valorA} é maior`)
} else {
  alert (`O valor B: ${valorB} é maior`)
}