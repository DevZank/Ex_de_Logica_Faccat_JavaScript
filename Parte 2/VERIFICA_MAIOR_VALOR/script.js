let valor1          // Real
let valor2          // Real
let valor3          // Real 

valor1 = parseFloat(prompt("Digite o 1º Valor: "))
valor2 = parseFloat(prompt("Digite o 2º Valor: "))
valor3 = parseFloat(prompt("Digite o Ultimo Valor: "))

if (valor1 > valor2 && valor1 > valor3) {
  alert (`O Maior valor é o: ${valor1}`)
} else if (valor2 > valor1 && valor2 > valor3) {
  alert (`O Maior valor é o: ${valor2}`)
} else {
  alert (`O Maior valor é o: ${valor3}`)
}