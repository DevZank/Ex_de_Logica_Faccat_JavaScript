let carros_vendidos
let valor_total
let salario_fixo
let comissao_fixo
let ganho_valor_total
let salario_final

carros_vendidos = parseInt(prompt("Quantos carros o funcionario vendeu")) 
valor_total = parseFloat(prompt("Digite o valor total de suas vendas")) 
salario_fixo = parseFloat(prompt("Qual o salario fixo do funcionario")) 
comissao_fixo = parseFloat(prompt("Digite a comissao fixa por carro vendido")) 

ganho_valor_total = valor_total * 5 / 100  

salario_final =  ganho_valor_total + salario_fixo + comissao_fixo  

alert(`O salario final do funcionario é ${salario_final}`)