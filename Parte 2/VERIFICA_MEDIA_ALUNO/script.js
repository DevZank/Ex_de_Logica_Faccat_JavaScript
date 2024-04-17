let notaAvaliacao1          // Real
let notaAvaliacao2          // Real
let media                   // Real 

notaAvaliacao1 = parseFloat(prompt("Digite a 1º nota: "))
notaAvaliacao2 = parseFloat(prompt("Digite a 2º nota: "))

media = (notaAvaliacao1 + notaAvaliacao2) / 2

if (media >= 6) {
  alert (`Aluno foi APROVADO! Média de: ${media}`)
} else {
  alert (`Aluno foi REPROVADO! Média de: ${media}`)
}