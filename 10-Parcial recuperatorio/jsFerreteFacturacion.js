/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function PrecioFinal () 
{
		var Preciosindescuento ;// EJERCICIO 2 NIVEL 1
		var preciocondescuento;		
		var descuento;		
		Preciosindescuento= prompt("ingrese precio producto");
		Preciosindescuento=parseInt(Preciosindescuento);		
		preciocondescuento=((Preciosindescuento*75))/100
		
		alert("el importe final con descuento por fin de temporada es :"+preciocondescuento);
	
}

function Sumar () 
{
		var PrecioUno ;
		var PrecioDos;
		var PrecioTres;
		var sumaprecios;
		PrecioUno= document.getElementById('PrecioUno').value;
		PrecioDos = document.getElementById('PrecioDos').value;
		PrecioTres= document.getElementById('PrecioTres').value;
		PrecioUno= parseInt(PrecioUno);
		PrecioDos = parseInt(PrecioDos);
		PrecioTres= parseInt(PrecioTres);
		sumaprecios=(PrecioUno+PrecioDos+PrecioTres);
		alert("La suma de los tres precios es "+sumaprecios);
	
}
function Promedio () 
{
		var PrecioUno ;
		var PrecioDos;
		var PrecioTres;
		var sumaprecios;
		var promedio;
		PrecioUno= document.getElementById('PrecioUno').value;
		PrecioDos = document.getElementById('PrecioDos').value;
		PrecioTres= document.getElementById('PrecioTres').value;
		PrecioUno= parseInt(PrecioUno);
		PrecioDos = parseInt(PrecioDos);
		PrecioTres= parseInt(PrecioTres);
		promedio=(PrecioUno+PrecioDos+PrecioTres)/3;
		alert("El promedio de los tres precios es "+promedio);

}






