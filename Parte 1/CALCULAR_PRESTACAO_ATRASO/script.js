let valor
let taxa
let tempo
let prestacao

valor = parseFloat(prompt("Digite o Valor da prestação: "))
taxa = parseInt(prompt("Digite o Valor da taxa em Porcentagem: "))
tempo = parseInt(prompt("Digite o Tempo de atraso em Dias: "))

prestacao = valor + (valor * taxa / 100) * tempo

alert (`O valor final da Prestação é: R$${prestacao}`)