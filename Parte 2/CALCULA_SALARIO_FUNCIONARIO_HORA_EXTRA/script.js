let jornadaMin           // Inteiro
let valorHora            // Real
let horasExtra           // Inteiro
let horasTrabalhadas     // Inteiro
let salarioFuncionario   // Real

jornadaMin = 40 * 4

horasTrabalhadas = parseInt(prompt("Quantas horas foram trabalhadas no mes? "))
valorHora = parseFloat(prompt("Qual o valor da hora trabalhada? "))

if (horasTrabalhadas > jornadaMin) {
  horasExtra = horasTrabalhadas - jornadaMin
  salarioFuncionario = valorHora * horasTrabalhadas + horasExtra * (valorHora * 1.5)
  alert (`O Salário do Funcionario é de: R$${salarioFuncionario}`)
} else {
  salarioFuncionario = valorHora * horasTrabalhadas
  alert (`O Salário do Funcionario é de: R$${salarioFuncionario}`)
}
