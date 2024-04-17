let litrosVendidos  // Real
let tipoCombustivel // Caractere
let total           // Real
let valorLitroG     // Real
let valorLitroA     // Real

litrosVendidos = parseFloat(prompt("Litros Abastecidos: "))
tipoCombustivel = prompt("Tipo de Combustivel (A/G): ")

valorLitroA = 2.90 - 2.90 / 100 * 3
valorLitroG = 3.30 - 3.30 / 100 * 4

if (tipoCombustivel.toLocaleUpperCase() == "A") {
  if (litrosVendidos > 20) {
    valorLitroA = 2.90 - 2.90 / 100 * 5
    total = litrosVendidos * valorLitroA
  } else {
    total = litrosVendidos * valorLitroA
  }
}

if (tipoCombustivel.toLocaleUpperCase() == "G") {
  if (litrosVendidos > 20) {
    valorLitroG = 3.30 - 3.30 / 100 * 6
    total = litrosVendidos * valorLitroG 
  } else {
    total = litrosVendidos * valorLitroG
  }
}

alert (`O total a ser Pago é: R$${total.toFixed(2)}`)