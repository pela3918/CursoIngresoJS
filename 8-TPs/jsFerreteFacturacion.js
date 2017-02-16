/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
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
function PrecioFinal () 
{
		var PrecioUno ;
		var PrecioDos;
		var PrecioTres;
		var Netos;		
		var iva21;
		var Totales;
		PrecioUno= document.getElementById('PrecioUno').value;
		PrecioDos = document.getElementById('PrecioDos').value;
		PrecioTres= document.getElementById('PrecioTres').value;
		PrecioUno= parseFloat(PrecioUno);
		PrecioDos = parseFloat(PrecioDos);
		PrecioTres= parseFloat(PrecioTres);
		Netos=(PrecioUno+PrecioDos+PrecioTres);
		iva21=(((PrecioUno+PrecioDos+PrecioTres)*21)/100);
		Totales=(Netos+iva21);
		alert("Netos = "+Netos+" iva21 = "+iva21+" Totales = "+Totales );
	
}