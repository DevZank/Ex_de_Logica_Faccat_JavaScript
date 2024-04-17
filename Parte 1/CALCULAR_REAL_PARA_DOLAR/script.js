let quantidadeReal
let cotacaoDolar
let valorDolar


quantidadeReal = parseFloat(prompt("Reais Disponiveis: R$"))
cotacaoDolar = parseFloat(prompt("Escreva a cotação do Dolar: "))

valorDolar = quantidadeReal / cotacaoDolar

alert (`Convertendo R$${quantidadeReal} em Dolar é U$${valorDolar}`)