let nota1
let nota2
let nota3
let mediaAluno

nota1 = parseFloat(prompt("Digite a primeira nota do Aluno: "))
nota2 = parseFloat(prompt("Digite a segunda nota do Aluno: "))
nota3 = parseFloat(prompt("Digite a terceira nota do Aluno: "))

mediaAluno = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

alert (`A média final do Aluno foi ${mediaAluno}`)