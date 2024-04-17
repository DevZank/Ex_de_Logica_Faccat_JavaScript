let idadeH1              // Inteiro
let idadeH2              // Inteiro
let idadeM1              // Inteiro
let idadeM2              // Inteiro

let hVelho               // Inteiro
let hNovo                // Inteiro
let mVelha               // Inteiro
let mNova                // Inteiro

let somaM_F              // Inteiro
let multiplicacaoM_F     // Inteiro

idadeH1 = parseInt(prompt("Idade do Homem 1: "))
idadeH2 = parseInt(prompt("Idade do Homem 2: "))
idadeM1 = parseInt(prompt("Idade do Mulher 1: "))
idadeM2 = parseInt(prompt("Idade do mulher 2: "))

if (idadeH1 > idadeH2) {
  hVelho = idadeH1
  hNovo = idadeH2
} else {
  hVelho = idadeH2
  hNovo = idadeH1
}

if (idadeM1 > idadeM2) {
  mVelha = idadeM1
  mNova = idadeM2
} else {
  mVelha = idadeM2
  mNova = idadeM1
}

somaM_F = hVelho + mNova
multiplicacaoM_F = hNovo * mVelha

alert (`Soma da Idade Mais Velho com Mais Nova: ${somaM_F}`)
alert (`Multiplicação da Idade Mais Novo com Mais Velha: ${multiplicacaoM_F}`)