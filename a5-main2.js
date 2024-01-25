const { getNumero, listaLength, print, getSalario } = require("./a5-funcoesAux2");


// print(listaLength);
let maiorPar = 0;
let menorImpar = 0;

for(let i = 0; i < listaLength; i++) {
	const number = getNumero();
		
	if (number % 2 === 0) {
		if (maiorPar === 0 || number > maiorPar) {
			maiorPar = number;
		}
	} else { 
		if (menorImpar === 0 || number < menorImpar) {
		menorImpar = number;
		}
	} 
}
print(` Maior numero par é ${maiorPar}`);
print(` Menor numero ímpar é ${menorImpar}`);

/* Exercicio: Pagamento de salario
Regras: paga salario bruto - desconto IR + beneficios
Alíquotas de IR:
0 -       R$ 1100,00  -- 5%
1100,00 - R$ 2500,00  -- 10%
Acima de R$ 2500,000  -- 15%
*/

// getSalario() associa [salarioBruto, beneficios] a valor e retorna cada valor a cada chamada
const salarioBruto = getSalario();	
const beneficios = getSalario();

function calcularSalario() {
	let aliquotaIR;
	
	if (salarioBruto <= 1100) {
		aliquotaIR = 5;
		
	} else if (salarioBruto > 2500) {
		aliquotaIR = 15;
				
	} else {
		aliquotaIR = 10;
	}
	const salarioLiquido = (salarioBruto * (1 - aliquotaIR / 100) + beneficios).toFixed(2);
	return (`Salario calculado é R$ ${salarioLiquido}`); 
}
 print(calcularSalario());
 //para entradas = [1200, 300]; 
 // Salario calculado é R$ 1380.00


