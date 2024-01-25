function sayName(name) {
	return console.log(`The name is ${name}`);
}

sayName('André');
// PROCEDIMENTO é uma função que não tem retorno, apenas executa algo

function calculaQuadrado(num) {
	return Math.pow(num, 2);
	// operador potência:   Math.pow(base, expoente)
}
 console.log(calculaQuadrado(9) + calculaQuadrado(5));



//  *****  JUROS SIMPLES ********

function calcularJurosSimples(capital, prazoMensal, taxaMensal) {
	const juroSimples = capital * prazoMensal * (taxaMensal / 100);
	const montante = capital + juroSimples;
	return console.log(`O montante calculado é R$ ${montante} com juros simples de R$ ${juroSimples}`);
}

calcularJurosSimples(200, 6, 20);

// ******  CÁLCULO DO IMC COM FUNÇÕES  ******
function calcularImc(pesoKg, alturaMetros) {
	return (pesoKg / Math.pow(alturaMetros, 2)).toFixed(2);
}

function classificarImc(imc) {
	if (imc <= 18.5) {
		return 'Vc está abaixo do peso';
	} else if (imc > 18.5 && imc <= 25) {
		return 'Vc está com peso normal.';
		
	} else if (imc > 25 && imc <= 30) {
		return 'Vc está acima do peso';
		
	} else if (imc > 30 && imc <= 40) {
		return 'Vc está obeso';
		
	} else {
		return 'Vc está com obesidade grave.';
	} 
}

function main() {
	const pesoKg = 76;
	const alturaMetros = 1.76;

	const imc = calcularImc(pesoKg, alturaMetros);
	console.log(`Seu IMC vale ${imc} e ${classificarImc(imc)}`);
	
}

main();
// a function depois de declarada passa a ser um valor, que posso atribuir a uma variavel ou como param pra outra function
// posso manipular a function como objeto que é

// FUNÇÃO INVOCADA IMEDIATAMENTE: entre () e invocada logo depois apenas com ()  
// FUNÇÃO ANÔNIMA
// geralmente são executadas uma única vez

// será a function main
(function () {
	const pesoKg = 120;
	const alturaMetros = 1.60;

	const imc = calcularImc(pesoKg, alturaMetros);
	console.log(`Seu IMC vale ${imc} e ${classificarImc(imc)}`);
	
})();

// ********   FORMAS DE PAGAMENTO  ********
function aplicarDesconto(valor, percentualDesconto) {
	return (valor * (1 - percentualDesconto / 100));
}
function aplicarJuros(valor, percentualJuros) {
	return (valor * (1 + percentualJuros / 100))
}
const precoEtiqueta = 1000;
const formaPagamento = 4;

if (formaPagamento === 1) {
	console.log(`Preço: R$ ${precoEtiqueta}. Valor a pagar: R$ ${aplicarDesconto(precoEtiqueta, 10)}`);
	
} else if (formaPagamento === 2) {
	console.log(`Preço: R$ ${precoEtiqueta}. Valor a pagar: R$ ${aplicarDesconto(precoEtiqueta, 15)}`);
	
} else if (formaPagamento === 3)  {
	console.log(`Preço: R$ ${precoEtiqueta}. Valor a pagar: R$ ${aplicarDesconto(precoEtiqueta, 0)}`);
	
} else {
	console.log(`Preço: R$ ${precoEtiqueta}. Valor a pagar: R$ ${aplicarJuros(precoEtiqueta, 10)}`);	
}


