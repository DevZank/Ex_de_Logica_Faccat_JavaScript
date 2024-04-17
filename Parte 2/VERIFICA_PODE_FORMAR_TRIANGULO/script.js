let A          // Inteiro
let B          // Inteiro
let C          // Inteiro

let true1      // Logico
let true2      // Logico
let true3      // Logico

A = parseInt(prompt("Escreva o lado A do Triângulo: "))
B = parseInt(prompt("Escreva o lado B do Triângulo: "))
C = parseInt(prompt("Escreva o lado C do Triângulo: "))

if (A < B + C) {
  true1 = true
} else{
  true1 = false
}

if (B < A + C) {
  true2 = true
} else{
  true2 = false
}

if (C < B + A) {
  true3 = true
} else{
  true3 = false
}

if (true1 == true && true2 == true && true3 == true) {
  alert ("Os Valores Formam Um Triangulo!")
} else {
  alert ("Os Valores não Formam Um Triangulo!")
}