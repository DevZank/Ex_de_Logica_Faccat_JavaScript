let inicioJogo           // Inteiro
let fimJogo              // Inteiro
let duracaoJogo          // Inteiro

inicioJogo = parseInt(prompt("Hora de inicio do Jogo: "))
fimJogo = parseInt(prompt("Hora do Fim do Jogo: "))

duracaoJogo = fimJogo - inicioJogo

if (fimJogo = inicioJogo) {
  duracaoJogo = fimJogo - inicioJogo + 24
  alert (`Duração do Jogo: ${duracaoJogo}h`)
} else if (fimJogo < inicioJogo) {
  duracaoJogo = fimJogo - inicioJogo + 24
  alert (`Duração do Jogo: ${duracaoJogo}h`)
} else {
  alert (`Duração do Jogo: ${duracaoJogo}h`)
}
