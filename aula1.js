console.log("Imprimindo algo");
// no terminal PS D:\TI\JS\DioJSDeveloper\Aulas> 
// declaro node nomeArquivo.js -->  PS D:\TI\JS\DioJSDeveloper\Aulas> node aula1.js

// VARIAVEIS E OPERADORES

let numero = 11;
console.log(numero);  // 10
numero = 30;
console.log(numero);  // 30
const pi = 3.14;
console.log(pi); // 3.14
// pi = 5;
// console.log(pi);
// // TypeError: Assignment to constant variable.

// Exercicio 1) Gasto de uma viagem
var precoLitro = 6.50;    // R$ 3.89 /L
var consumoPorLitro = 8;          // 8 Km/L
var distanciaKm = 600;     // Km

var gastoViagem = ((distanciaKm / consumoPorLitro) * precoLitro).toFixed(2);
console.log(typeof(gastoViagem))
// string
console.log('Gasto na Viagem = R$ ' + gastoViagem);
console.log(`Gasto na Viagem = R$ ${gastoViagem}`);
// Gasto na Viagem = R$ 337.50

// CONDICIONAL
console.log(numero); // 30
numeroEhPar = (numero % 2) === 0;   // True ou False
console.log(numeroEhPar);   

numero = 11;
numeroEhPar = (numero % 2) === 0;   // True ou False
console.log(numeroEhPar);

// == IGUALDADE (só valor),  === IGUALDADE RESTRITA (compara valor e tipo var)
numero = 4;
numeroEhPar = (numero % 2) == "0";   
console.log(numeroEhPar);   // true

numeroEhPar = (numero % 2) === "0";   
console.log(numeroEhPar);   // false

number = 15
console.log(number); 
isNumberPar = (number % 2) === 0;   // True ou False
// por convencao, nomeamos variavel booleana começando com is
console.log(isNumberPar);   

if (isNumberPar) {
	console.log(`O numero ${number} é par`);
} else {
	console.log(`O numero ${number} é ímpar`);
}
// posso tb colocar a negaçao da condicao (!condicao)
if (!isNumberPar) {
	console.log('Número é ímpar');
}

var idade = 38;

if (idade <=0) {
	console.log('Idade inválida');
} else if (idade < 10) {
	console.log('Infância');
} else if (idade >=10 & idade <13) {
	console.log('Pré-adolescente');
} else if (idade >= 13 & idade < 18) {
	console.log('Adolescente'); 
} else {
	console.log('Adulto');
}

const precoEtanol = 4.40;
const precoGasolina = 5.60;
const consumoEtanol = 10;
const consumoGasolina = 14;
const distanciaEmKm = 800;

var tipoCombustivel = 'gas';

if (tipoCombustivel == 'etanol') {
	custoViagem = (distanciaEmKm / consumoEtanol) * precoEtanol;
	console.log(`Você gastou R$ ${custoViagem.toFixed(2)}`);
} else if (tipoCombustivel == 'gasolina') {
	custoViagem = (distanciaEmKm / consumoGasolina) * precoGasolina;
	console.log(`Você gastou R$ ${custoViagem.toFixed(2)}`);
} else {
	console.log('Combustível inválido');
}

// Notas de provas escolares
const nota1 = 10;
const nota2 = 9;
const nota3 = 5;

var media = (nota1 +nota2 + nota3)/3
console.log(`Sua média foi ${media}.`)

if(media >=7) {
	console.log('Passou direto. Parabéns!');
} else if (media <5) {
	console.log('Reprovado!');
} else {
	console.log('Vc está de recuperação. ')
}

// Cálculo do IMC
console.log('*************CÁLCULO DO IMC***************')
const pesoKg = 97;
const alturaMetros = 1.76;

var IMC = (pesoKg / (alturaMetros **2)).toFixed(2);
console.log(`Seu IMC vale ${IMC}.`);

if (IMC <= 18.5) {
	console.log('Vc está abaixo do peso.');
} else if (IMC > 18.5 && IMC <= 25) {
	console.log('Vc está com peso normal.');
} else if (IMC > 25 && IMC <= 30) {
	console.log('Vc está acima do peso.');
} else if (IMC > 30 && IMC <= 40) {
	console.log('Vc está obeso.');
} else {
	console.log('Vc tem uma obesidade grave.');
}

console.log('Valor a ser pago:' + '(1) débito, (2) dinheiro ou PIX, (3) em duas vezes, (4) parcelado em 3x ou mais')

const precoEtiqueta = 1000;
console.log(`O preço de etiqueta é R$ ${precoEtiqueta}`)
const percDebito = 5;
const percPIX = 15;
const jurosMais2Vezes = 10;
var formaPagamento = 4;

if (formaPagamento === 1) {
	console.log(`Com ${formaPagamento} vc vai pagar R$ ${precoEtiqueta * (1 - percDebito/100)}`);	
} else if (formaPagamento === 2) {
	console.log(`Com ${formaPagamento} vc vai pagar R$ ${precoEtiqueta * (1 - percPIX/100)}`);
} else if (formaPagamento === 3) {
	console.log(`Com ${formaPagamento} vc vai pagar R$ ${precoEtiqueta}`);
} else  {
	console.log(`Com ${formaPagamento} vc vai pagar R$ ${(precoEtiqueta * (1 + jurosMais2Vezes/100)).toFixed(2)}`);
}

