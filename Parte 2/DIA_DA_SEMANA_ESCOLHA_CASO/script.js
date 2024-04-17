let numero = parseInt(prompt("Digite um número 1 - 7:"));

let diaSemana = (numero == 1) ? "Domingo" : (numero == 2) ? "Segunda-feira" : (numero == 3) ? "Terça-feira" : (numero == 4) ? "Quarta-feira" : (numero == 5) ? "Quinta-feira" : (numero == 6) ? "Sexta-feira" : (numero == 7) ? "Sábado" : "Número inválido";

alert(`${diaSemana}!`);
