let qntMaca      // Inteiro
let valorMaca    // Real
let total        // Real

valorMaca = 1.30
qntMaca = parseInt(prompt("Digite quantas maças foram compradas: "))

if (qntMaca >= 12) {
  valorMaca = 1.00
  total = qntMaca * valorMaca
  alert (`O valor da compra foi R$${total}`)
  alert (`O valor unitario das maçãs foi R$${valorMaca}`)
} else {
  total = qntMaca * valorMaca
  alert (`O valor da compra foi R$${total}`)
  alert (`O valor unitario das maçãs foi R$${valorMaca}`)
}