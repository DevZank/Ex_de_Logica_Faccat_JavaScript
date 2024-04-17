let largura
let comprimento
let altura
let volume

comprimento = parseFloat(prompt("Escreva o valor do Comprimento da Caixa: "))
largura = parseFloat(prompt("Escreva o valor da Largura da Caixa: "))
altura = parseFloat(prompt("Escreva o valor da Altura da Caixa: "))

volume = comprimento * largura * altura

alert (`O volume da Caixa é: ${volume.toFixed(2)}`)