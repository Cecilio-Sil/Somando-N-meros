function somar () {
	
	let num1 = document.getElementById("txtn1");
	let num2 = document.getElementById("txtn2");
	let resul = document.querySelector("#res");
	
	//------------ formatação e manipulamento de dados --------------
	let n1 = Number(num1.value);
	let n2 = Number(num2.value);
	let soma = n1 + n2;
	//---------------------------------------------------------------
	
	resul.innerText = `O reaultado da soma de ${n1} + ${n2} é igual ${soma}.`;
}