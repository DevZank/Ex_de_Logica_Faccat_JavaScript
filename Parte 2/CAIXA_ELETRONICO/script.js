let opcao1        // Inteiro
let opcao2        // Inteiro

alert ("CAIXA ELETRONICO")

opcao1 = parseInt(prompt("SELECIONE UMA OPCAO A SEGUIR: \n1 - DEPOSITO \n2 - SAQUE \n3 - EXTRATO \n4 - PAGAMENTOS \n5 - TRANSFERENCIA \n6 - SALDO \n7 - PIX "))

switch (opcao1) {
  case 1:
    opcao2 = parseInt(prompt("Você digitou a opção 1\n\n1 - DEPOSITO\n\nSELECIONE UMA OPCAO A SEGUIR :\n\n1 - DEPOSITO EM CONTA CORRENTE\n\n2 - DEPOSITO EM CONTA POUPANÇA"))
    switch (opcao2) {
      case 1:
        alert("Você digitou a opção 1\n\n" +
              "1 - DEPOSITO EM CONTA CORRENTE\n\n")
        break
      case 2:
        alert("Você digitou a opção 2\n\n" +
              "2 - DEPOSITO EM CONTA POUPANÇA\n\n")
        break
      default:
        alert("Opção Inválida")
    }
    break
  case 2:
    alert("Você digitou a opção 2\n\n" +
          "2 - SAQUE\n\n")
    break
  case 3:
    alert("Você digitou a opção 3\n\n" +
          "3 - EXTRATO\n\n")
    break
  case 4:
    alert("Você digitou a opção 4\n\n" +
          "4 - PAGAMENTOS\n\n")
    break
  case 5:
    alert("Você digitou a opção 5\n\n" +
          "5 - TRANSFERENCIA\n\n")
    break
  case 6:
    alert("Você digitou a opção 6\n\n" +
          "6 - SALDO\n\n")
    break
  case 7:
    alert("Você digitou a opção 7\n\n" +
          "7 - PIX\n\n")
    break
  default:
    alert("Opção inválida")
}