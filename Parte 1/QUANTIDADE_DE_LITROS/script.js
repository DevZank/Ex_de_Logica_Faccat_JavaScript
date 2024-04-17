let tempo
let velocidade
let distancia
let litrosUsados

tempo = parseFloat(prompt("Escreva o tempo gasto na viagem em Horas: "))
velocidade = parseFloat(prompt("Escreva a velocidade do carro na viagem: "))

distancia = tempo * velocidade
litrosUsados = distancia / 12 

alert (`A média de Velocidade foi: ${velocidade}Km/h \nO tempo gasto foi: ${tempo}h \nA distancia percorrida foi: ${distancia}Km \nE a quantidade de litros usados foi: ${litrosUsados.toFixed(2)} L`)