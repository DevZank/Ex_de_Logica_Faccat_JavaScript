let valor1          // Real
let valor2          // Real
let valor3          // Real 

let soma            // Real

valor1 = parseFloat(prompt("Digite o 1º Valor: "))
valor2 = parseFloat(prompt("Digite o 2º Valor: "))
valor3 = parseFloat(prompt("Digite o Ultimo Valor: "))

if (valor1 > valor2 && valor1 > valor3 || valor2 > valor1 && valor1 > valor3) {
  soma = valor1 + valor2
  alert (`A soma dos maiores valores é: ${soma}`)
} else if (valor2 > valor3 && valor3 > valor1 || valor3 > valor2 && valor2 > valor1) {
  soma = valor2 + valor3
  (`A soma dos maiores valores é: ${soma}`)
} else {
  soma = valor3 + valor1
  (`A soma dos maiores valores é: ${soma}`)
}