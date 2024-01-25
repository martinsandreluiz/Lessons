// *********  OBJETOS  *********
const pessoa = {
	nome: 'Andre Luiz Martins',
	idade: 53
};

console.log(pessoa.nome); // Andre Luiz Martins

pessoa.altura = 1.76;  // adicionando chave, valor ao objeto andre
console.log(pessoa);  // { nome: 'Andre Luiz Martins', idade: 53, altura: 1.76 }

delete pessoa.idade;		// deletando chave, valor

console.log(pessoa);		// { nome: 'Andre Luiz Martins', altura: 1.76 }

//uma function dentro de um objeto é chamada de método
//.this refere-se ao contexto onde a function está inserida (aqui, está inserida dentro do objeto pet)
const pet = {
	animal : 'cachorro',
	cor : 'preta',
	idade: 3, 
	descrever: function () {
		console.log(`Meu pet é um ${this.animal} de cor ${this.cor} e da raca ${this.raca}`)
	}
};

pet.descrever();  // { nome: 'Andre Luiz Martins', altura: 1.76 }
pet.raca = 'pinscher';
pet.cor = 'caramelo'

pet.descrever();		// Meu pet é um cachorro de cor caramelo e da raca pinscher

pet.animal = 'gato';
pet.cor = 'branca';
pet.raca = 'angorá';

pet.descrever();		// Meu pet é um gato de cor branca e da raca angorá

// crio novo metodo (chave,valor) descreverMais em cima de outro metodo existente 
pet.descreverMais = function() {
	console.log(`Meu ${this.animal} tem ${this.idade} anos.`);
	return pet.descrever();
}

pet.descreverMais();
// Meu gato tem 3 anos.
// Meu pet é um gato de cor branca e da raca angorá

console.log(pet);
/*{
	animal: 'gato',
	cor: 'branca',
	idade: 3,
	descrever: [Function: descrever],
	raca: 'angorá',
	descreverMais: [Function (anonymous)]
} */

// Tipos de acesso ao objeto:
console.log(pet.animal);
console.log(pet['animal']);		// objeto['atributo(em string)']

pet['animal'] = 'peixe';
pet['raca'] = 'carpa';
console.log(pet);
/*
{
  animal: 'peixe',
  cor: 'branca',
  idade: 3,
  descrever: [Function: descrever],
  raca: 'carpa',
  descreverMais: [Function (anonymous)]
}
*/
// ******** Criando CLASSES *******
// CLASSE é um contrato, modelo de um objeto (descreve como tal objeto deve ser)
// INSTÂNCIAS são particularizações ('instance') desse objeto (modelo)
class Imc {
	nome;
	peso;
	altura;

	constructor(nome, peso, altura){	// O constructor() recebe os valores das var. e as introduz no contexto da classe com this. 
		this.nome = nome;				// esses valores das var. eu determino quando faço as instâncias do objeto
		this.peso = peso;
		this.altura = altura;
	}
	calcularImc() {
		return (this.peso / this.altura ** 2).toFixed(2);
		// console.log(`Meu nome é ${this.nome} e meu imc vale: ${imc}`);
	}
	classificarImc(){
		const imc = this.calcularImc();
		if(imc < 18.5) {
			console.log(`Oi, ${this.nome}, seu imc vale ${imc} e vc está abaixo do peso.`);			
		} else if (imc >= 18.5 && imc < 25) {
			console.log(`Oi, ${this.nome}, seu imc vale ${imc} e vc está com peso normal.`);			
		} else if (imc >= 25 && imc < 30) {
			console.log(`Oi, ${this.nome}, seu imc vale ${imc} e vc está acima do peso.`);			
		} else if (imc >= 30 && imc < 40) {
			console.log(`Oi, ${this.nome}, seu imc vale ${imc} e vc está obeso.`);
		} else { 
			console.log(`Oi, ${this.nome}, seu imc vale ${imc} e vc está com obesidade grave!!`);
		} 
		
	}
}

const IMC1 = new Imc('André Martins', 98, 1.76);
const IMC2 = new Imc('Fulana', 55, 1.85);  
const IMC3 = new Imc('Beltrano', 140, 1.65);
IMC1.classificarImc();
// Oi, André Martins, seu imc vale 31.64 e vc está obeso.

IMC2.classificarImc();
// Oi, Fulana, seu imc vale 16.07 e vc está abaixo do peso.

IMC3.classificarImc();
// Oi, Beltrano, seu imc vale 51.42 e vc está com obesidade grave!!

// constructor() {  }
class Pessoa {
	nome;
	idade;
	anoDeNascimento;
	
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
		this.anoDeNascimento = 2023 - idade;
	}
	descreverPessoa() {
		console.log(`Meu nome é ${this.nome} e nasci em ${this.anoDeNascimento}.`);
	}
}

let pessoa1 = new Pessoa('André', 53);
pessoa1.descreverPessoa();
// Meu nome é André e nasci em 1970.

pessoa1.anoDeNascimento = 1950;

pessoa1.descreverPessoa();
// Meu nome é André e nasci em 1950.

// criando function que usa a class Pessoa

function compararIdade(pessoa1, pessoa2) {
	if(pessoa1.idade > pessoa2.idade) {
		console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`);
	} else if (pessoa1.idade < pessoa2.idade) {
		console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}`);				
	} else {
		console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
	}
}

// const pessoa1 = new Pessoa('André', 53);  //pessoa1 já instanciada
let pessoa2 = new Pessoa('Lara', 15);

compararIdade(pessoa1, pessoa2);  // André é mais velho(a) que Lara

pessoa2 = new Pessoa('Miriam', 53);
compararIdade(pessoa1, pessoa2);  // André e Miriam tem a mesma idade

// classe Carro com marca, cor e consumoMedio e calcule custo de uma viagem, dados distancia e preço do combustivel

class Carro {
	marca;
	cor;
	consumoMedio;

	constructor(marca, cor, consumoMedio) {
		this.marca = marca; // atribuímos ao atrib marca (this significa no contexto da class) o valor marca recebido no constructor
		this.cor = cor;
		this.consumoMedio = consumoMedio;
	}

	calcularGastoViagem(distancia, precoCombustivel) {
		this.gasto = (distancia / this.consumoMedio * precoCombustivel);
		console.log(`Meu carro é um ${this.marca}, cor ${this.cor}. Gastei R$ ${(this.gasto).toFixed(2)} nessa viagem.`);
	}
}

const carro1 = new Carro('corsa', 'preta', 14);
console.log(carro1);
// Carro { marca: 'corsa', cor: 'preta', consumoMedio: 14 }

const carro2 = new Carro('civic', 'branca', 8);


carro1.calcularGastoViagem(140, 4.5);
// Meu carro é um civic, cor branca. Gastei R$ 78.75 nessa viagem.
carro2.calcularGastoViagem(140, 4.5);
// Meu carro é um corsa, cor preta. Gastei R$ 45.00 nessa viagem.

// fazendo direto, sem declarar const:
new Carro('mercedes', 'prata', 4).calcularGastoViagem(140, 4.5);
// Meu carro é um mercedes, cor prata. Gastei R$ 157.50 nessa viagem.












