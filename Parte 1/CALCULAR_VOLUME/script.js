let raio
let altura
let volume

raio = parseFloat(prompt("Escreva o valor do Raio da Lata: "))
altura = parseFloat(prompt("Escreva o valor da Altura da Lata: "))

volume = 3.14 * raio ** 2 * altura

alert (`O volume da Lata é: ${volume}`)