/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function PrecioFinal () 
{
		var Precio ;
		var Neto;		
		var iva21;
		var Total;
		Precio= prompt("inrgese precio producto");// EJERCICIO 2 NIVEL 1
		Precio=parseInt(Precio);		
		Neto=(Precio);
		iva21=(((Precio)*21)/100);
		Total=(Neto+iva21);
		alert("Neto = "+ Neto +" iva21 = "+iva21+" Total = "+Total );
	
}