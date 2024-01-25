function get() {
	return 10;
}

function print(texto) {
	console.log(texto);
}

const listaNumeros = [5, 50, 10, 98, 23];
let i = 0;	//contador
const listaQuantos= listaNumeros.length;
function gets() {
	const n = listaNumeros[i];
	i++;
	return (n);
}


// Exercicio: calculando media

const notasProvas = [6, 3, 5.5, 4, 2];
let soma = 0;

function getMedia() {
	for (let i = 0; i < notasProvas.length; i++) {
		soma += notasProvas[i];
	}
	const media = soma / notasProvas.length;
	return media;	
}

module.exports = {get, print, gets, getMedia, listaQuantos};

