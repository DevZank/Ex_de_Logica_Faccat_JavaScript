let totalEleitores
let votosBrancos 
let votosNulos 
let votosValidos
let porcentagemValidos
let porcentagemBrancos
let porcentagemNulos
 
alert("Vamos ler o total de Eleitores e apresentar a porcentagem de cada um dos tipos de voto");
 
totalEleitores = parseInt(prompt("Digite o total de eleitores:"));
votosBrancos = parseInt(prompt("Digite o total de Votos Brancos: "));
votosNulos = parseInt(prompt("Digite o total de Votos Nulos: "));
votosValidos = parseInt(prompt("Digite o total de Votos Válidos: "));
 
porcentagemBrancos = (votosBrancos / totalEleitores * 100);
porcentagemNulos = (votosNulos / totalEleitores * 100);
porcentagemValidos = (votosValidos / totalEleitores * 100);
 
alert(`Porcentagem de Votos brancos: ${porcentagemBrancos}%`);
alert(`Porcentagem de votos Nulos: ${porcentagemNulos}%`);
alert(`Porcentagem de votos Válidos: ${porcentagemValidos}%`);