let custoFabrica
let percentualDistribuidor
let percentualImpostos
let custoConsumidor

custoFabrica = parseFloat(prompt("Escreva o custo de Fabrica: "))

percentualDistribuidor = 28 / 100
percentualImpostos = 45 / 100

custoConsumidor = custoFabrica * percentualDistribuidor + custoFabrica * percentualImpostos + custoFabrica

alert (`O custo final ao consumidor é R$${custoConsumidor}`)