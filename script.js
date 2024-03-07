function fazerCalculo(){
	let value01 = document.getElementById("faixa01").value;
	let value02 = document.getElementById("faixa02").value;
	let multi = parseFloat(document.getElementById("multi").value);
	let tolerancia = parseFloat(document.getElementById("toler").value);

	let valorResistencia = parseFloat(value01+value02) * multi;
	let tolerMax = valorResistencia + (valorResistencia*tolerancia);
	let tolerMin = valorResistencia - (valorResistencia*tolerancia);

	document.getElementById("resultado").value = valorResistencia;
	document.getElementById("toleran").value = (tolerMin+" - "+tolerMax);

}