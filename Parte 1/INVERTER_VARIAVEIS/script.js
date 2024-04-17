let letraA
let letraB
let ponte

letraA = parseInt(prompt("Digite um texto: "))
letraB = parseInt(prompt("Digite outro texto: "))

ponte = letraA
letraA = letraB
letraB = ponte

alert (`O valor da A agora é: ${letraA}`)
alert (`O valor da B agora é: ${letraB}`)