let letraA, letraB, letraC, letraD
let r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12

letraA = parseFloat(prompt("Digite o Valor de A: "))
letraB = parseFloat(prompt("Digite o Valor de B: "))
letraC = parseFloat(prompt("Digite o Valor de C: "))
letraD = parseFloat(prompt("Digite o Valor de D: "))

r1 = letraA + letraB
r2 = letraA + letraC
r3 = letraA + letraD
r4 = letraB + letraC
r5 = letraB + letraD
r6 = letraC + letraD
r7 = letraA * letraB
r8 = letraA * letraC
r9 = letraA * letraD
r10 = letraB * letraC
r11 = letraB * letraD
r12 = letraC * letraD

alert (`Resultado 1: ${r1} \nResultado 2: ${r2} \nResultado 3: ${r3} \nResultado 4: ${r4} \nResultado 5: ${r5} \nResultado 6: ${r6} \nResultado 7: ${r7} \nResultado 8: ${r8} \nResultado 9: ${r9} \nResultado 10: ${r10} \nResultado 11: ${r11} \nResultado 12: ${r12}`)