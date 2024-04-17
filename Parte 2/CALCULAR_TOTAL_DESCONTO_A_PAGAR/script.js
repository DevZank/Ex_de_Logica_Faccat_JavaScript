let nomeproduto           // Caractere
let preco                 // Real
let desconto              // Real
let total                 // Real
let totalcompra           // Real
let quantidade            // Inteiro

nomeproduto = prompt("Digite o nome do produto que deseja comprar: ")
quantidade = parseInt(prompt("Digite a quantidade que deseja comprar: "))
preco = parseFloat(prompt("Digite o preço do produto: "))

total = quantidade * preco

if (quantidade <= 5) {
  desconto = total * 0.02
} else if (quantidade <= 10) {
  desconto = total * 0.03
} else {
  desconto = total * 0.05
}

totalcompra = total - desconto

alert (`Total a pagar por ${nomeproduto}: R$${totalcompra}`)