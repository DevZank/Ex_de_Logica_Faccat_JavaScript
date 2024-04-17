let salarioFixo           // Real
let salarioTotal          // Real
let comissao              // Inteiro
let valorTotalVendas      // Real

salarioFixo = parseInt(prompt("Digite o salario Fixo do Funcionario: R$"))
valorTotalVendas = parseInt(prompt("Digite o valor total das Vendas: R$"))

comissao = 3

if (valorTotalVendas > 1500) {
  comissao = 5
}

salarioTotal = salarioFixo + valorTotalVendas / 100 * comissao
alert (`O Salario do funcionario é: R$${salarioTotal.toFixed(2)}`)