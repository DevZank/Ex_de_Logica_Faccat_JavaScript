let carros_vendidos
let valor_total_vendas
let salario_fixo
let valor_carro_comissao

let salario_final

carros_vendidos = parseFloat(prompt("Numero de carros Vendidos: "))
valor_total_vendas = parseFloat(prompt("Valor total com as vendas do Funcionario: "))
salario_fixo = parseFloat(prompt("Salario Fixo do Funcionario: "))
valor_carro_comissao = parseFloat(prompt("Valor da comissao fixa dos Carros: "))

valor_total_vendas = valor_total_vendas * 0.05
salario_final = valor_carro_comissao * carros_vendidos + valor_total_vendas + salario_fixo

alert (`O salario final do Funcionario é R$${salario_final}`)