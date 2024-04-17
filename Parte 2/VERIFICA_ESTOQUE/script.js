let emEstoque       // Inteiro
let maxEstoque      // Inteiro
let minEstoque      // Inteiro

let mediaEstoque    // Real

emEstoque = parseInt(prompt("Diga a quantidade em Estoque: "))
maxEstoque = parseInt(prompt("Diga a quantidade maxima do Estoque: "))
minEstoque = parseInt(prompt("Diga a quantidade minima do Estoque: "))

mediaEstoque = (maxEstoque + minEstoque) / 2

if (emEstoque >= mediaEstoque) {
  alert ("Não é Necessario Efetuar Compra!")
} else {
  alert ("É Necessario Efetuar Compra!")
}