const alunos = ['Maria', 'Joao', 'Mariana'];
//adicionando:
alunos.push('Ricardo'); 
alunos[4] = 'Ana';

console.log(alunos);
//[ 'Maria', 'Joao', 'Mariana', 'Ricardo', 'Ana' ]
console.log(`${alunos[0]} e ${alunos[4]}`);
// Maria e Ana

// substituindo:
alunos[3] = 'peixe';
console.log(alunos);
// [ 'Maria', 'Joao', 'Mariana', 'peixe', 'Ana' ]

// posso ter tipos diferentes:
alunos.push(3.14, true);
console.log(alunos);
// ['Maria','Joao','Mariana', 'peixe',	'Ana', 3.14, true]

//excluindo itens:
//.pop() - Removes the last element from an array and returns it
console.log(alunos.pop())

console.log(alunos); // ['Maria','Joao','Mariana', 'peixe',	'Ana', 3.14]

//shift() - Removes the first element from an array and returns it
console.log(alunos.shift());
	
console.log(alunos); // [ 'Joao', 'Mariana', 'peixe', 'Ana', 3.14 ]

// a string é uma lista especial:

frase = 'Aprender Javascript é muito empolgante.';

console.log(frase[1]);  	// p

// for loop - estrutura de repetição
//for (declara i e onde deve começar; condição pra entrar no loop; passo do i) { codigo}

for (let i = 0; i < frase.length; i++) {
	const element = frase[i];
	console.log(element);	
}

// calculando media provas
let notas = [];
notas.push(5, 7.5, 8, 7, 6);
console.log(notas);
// [ 5, 7.5, 8, 7, 6 ]

let soma = 0;

for (let i = 0; i < notas.length; i++) {
	const nota = notas[i];
	soma += nota;
}
let media = soma / (notas.length);	
console.log(`Media = ${media.toFixed(2)}`);
// 6.7

// TABUADA DE MULTIPLICAÇÃO
const numero = 4;
console.log(`***  Tabuada de ${numero} ***`);

for (let i = 1; i <= 10; i++) {
	const prod = i * numero;
	console.log(`${i} x ${numero} = ${prod}`);
}

// imprimindo somente numeros pares de uma lista
let listaNum = [];
listaNum.push(5, 71, 12, 16, 45, 68, 84, 91, 39);
let numPares = [];

for (let i = 0; i < listaNum.length; i++) {
	if (listaNum[i] % 2 === 0) {	
		numPares.push(listaNum[i]);
	}	
}
console.log(numPares);  //[ 12, 16, 68, 84 ]





