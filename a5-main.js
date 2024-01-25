// IMPORTANDO de a5-funcoesAux.js

const funcoes = require('./a5-funcoesAux');  // importar:    require('endereço_arquivo')

console.log(funcoes);  // { get: [Function: get], gets: [Function: gets], print: [Function: print] }

console.log(funcoes.get()); // 10
funcoes.print('Hey, there!'); // Hey, there!

// OBJECT DESTRUCTURING
//Exemplo
const pessoa = {
	name : 'André',
	age : 53
};

const {name} = pessoa; 	// crio uma const name usando o atrib name do objeto pessoa
console.log(name);  	// André

// const {name} = pessoa; é equivalente a:
const age = pessoa.age;
console.log(age);  // 53

const {get, print, gets, getMedia, listaQuantos} = require('./a5-funcoesAux');


print(get());  // 10

/* Exercicio
Uma sala tem 5 alunos e para cada aluno foi sorteado um numero 1-100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.
Dados de entrada: 5, 50, 10, 98, 23

escrevi a function gets() que está no outro arquivo

*/
/*const listaNumeros = [5, 50, 10, 98, 23];
let i = 0;	//contador
function gets() {
	const n = listaNumeros[i];
	i++;
	return (n);
}
*/
// const listaNumeros = [5, 50, 10, 98, 23];

const numerosSorteados = [];
for (let i = 0; i < funcoes.listaQuantos ; i++) {
	let nSorteado = gets();
	numerosSorteados.push(nSorteado);		
}
print(numerosSorteados);		// [ 5, 50, 10, 98, 23 ]

// escrevendo codigo para achar maior valor:
let maiorValor = 0;

for (let i = 0; i < listaQuantos; i++) {
	if (numerosSorteados[i] > maiorValor) {
		maiorValor = numerosSorteados[i];
	}
	
}
print(maiorValor);  // 98

/*simplificando o codigo acima:
let maiorValorEncontrado = 0;

for (let i = 0; i < listaNumeros.length; i++) {
	let num = gets();
	if (num > maiorValorEncontrado) {
		maiorValorEncontrado = num;
	}
}
print(maiorValorEncontrado);
*/

// Exercicio : critérios de aprovação pegando media com a funcaoAux getMedia()

let media = getMedia();
if (media >= 7) {
	print(`Sua media foi ${media} e vc está aprovado!`);
} else if (media < 5) {
	print(`Sua media foi ${media} e vc está reprovado!`);
	
} else {
	print(`Sua media foi ${media} e vc está em recuperação!`);
	
}



