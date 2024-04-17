let letraA
let letraB
let letraC

let Soma

letraA = parseFloat(prompt("Escreva o valor de A: "))
letraB = parseFloat(prompt("Escreva o valor de B: "))
letraC = parseFloat(prompt("Escreva o valor de C: "))

letraA = letraA ** 2
letraB = letraB ** 2
letraC = letraC ** 2

Soma = letraA + letraB + letraC

alert (`A soma dos Quadrados dos numero é: ${Soma}`)