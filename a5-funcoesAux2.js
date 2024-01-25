
const listaNumeros = [2, 15, 8, 7, 6, 12, 10, 4, 26, 3, 17, 38];
let i = 0;

function getNumero() {
	const numero = listaNumeros[i];
	i++;
	return numero;		
}	

const listaLength = listaNumeros.length;

function print(texto) {
	console.log(texto);
}

// calculo de salario
entradas = [1200, 300];  //[salarioBruto, beneficios]
let index = 0 ;

function getSalario() {
	const valor = entradas[index];
	index++;
	return valor;
}

module.exports = {print, getNumero, listaLength, getSalario};


