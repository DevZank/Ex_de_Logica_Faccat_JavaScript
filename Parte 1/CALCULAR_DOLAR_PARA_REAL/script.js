let quantidadeDolar
let cotacaoDolar
let valorReal


quantidadeDolar = parseFloat(prompt("Dolares Disponiveis: U$"))
cotacaoDolar = parseFloat(prompt("Escreva a cotação do Dolar: "))

valorReal = quantidadeDolar * cotacaoDolar

alert (`Convertendo U$${quantidadeDolar} em Reais é R$${valorReal}`)