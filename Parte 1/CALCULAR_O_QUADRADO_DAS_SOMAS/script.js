let letraA
let letraB
let letraC
let quadrado

letraA = parseInt(prompt("Escreva o valor de A: "))
letraB = parseInt(prompt("Escreva o valor de B: "))
letraC = parseInt(prompt("Escreva o valor de C: "))

quadrado = letraA + letraB + letraC
quadrado = quadrado ** 2

alert (`O quadrado das somas é: ${quadrado}`)