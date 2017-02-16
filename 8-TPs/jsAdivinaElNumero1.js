/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var ingresenumero;
var intentos = 0;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	ingresenumero=Math.floor((Math.random() * 100) + 1);
	
	alert(ingresenumero);
	intentos = 0;
}

function verificar()
{
	
	numeroSecreto=document.getElementById('numero').value;
	
	intentos++;

	if (numeroSecreto< ingresenumero)
	{
		alert("Te falta")
		
	}

		else if(numeroSecreto> ingresenumero)
	{
		alert("Te pasaste")
	}

	if(numeroSecreto==ingresenumero)
	{
		
		alert("Usted es el ganador!! Y tan solo en "+intentos+" intentos!!");
		intentos=0;
		
	}
}