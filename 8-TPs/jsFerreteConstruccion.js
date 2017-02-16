/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
		var Largo ;
		var Ancho;
		var radio ;
		var rectangulo ;
		Largo=document.getElementById('Largo').value;
		Ancho=document.getElementById('Ancho').value;
		Largo=parseInt(Largo);
		Ancho=parseInt(Ancho);
		rectangulo=(Largo+Ancho)*6;
		alert(rectangulo);
}
function Circulo () 
{
		var radio;
		var perimetrocirculo; 
		radio=document.getElementById('Radio').value;
		radio=parseInt(radio);
		perimetrocirculo=(2*Math.PI*radio)*3;
		alert(perimetrocirculo);	
}
function Materiales () 
{
		var Largo ;
		var Ancho;
		var cemento ;
		var cal ;
		var radio ;
		var arearectangulo;
		var areacirculo;
		Largo=document.getElementById('Largo').value;
		Ancho=document.getElementById('Ancho').value;
		Largo=parseInt(Largo);
		Ancho=parseInt(Ancho);
		radio=document.getElementById('Radio').value;
		radio=parseInt(radio);
		arearectangulo=(Largo*Ancho);
		areacirculo=(Math.PI*radio*radio);
		if(arearectangulo>0)
		{
			cemento=Math.round( (arearectangulo)/2);
			cal= Math.round((arearectangulo)/3);
			alert("se necesitan" +cemento+ " bolsas de cemento y " +cal+ "bolsas de cal");
		}
		else if (areacirculo>0)
		{
			cemento=Math.round((areacirculo))/2;
			cal=Math.round((areacirculo))/3;
			alert("se necesitan" +cemento+ " bolsas de cemento y " +cal+ "bolsas de cal");
		}	

		
	
}