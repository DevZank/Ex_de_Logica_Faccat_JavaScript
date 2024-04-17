let anos 
let meses 
let dias 
let idade
 
anos = parseInt(prompt("Digite sua idade em anos: "));
meses = parseInt(prompt("Digite a quantidade de meses completos que passou do seu último aniversário: "));
dias = parseInt(prompt("Digite a quantidade de dias que passou do seu último mêsversário:"));
 
idade = anos * 365 + meses * 30 + dias;
 
alert(`Você completou ${idade} dias de vida.`);