function Mostrar()
{
		var numerouno ;// EJERCICIO 4 NIVEL 2
		var numerodos;		
		var resultadosuma;
		numerouno=prompt("ingrese numero el primer numero");
		numerodos=prompt("ingrese numero el segundo numero");
		numerouno=parseInt(numerouno);
		numerodos=parseInt(numerodos);
		resultadosuma=numerouno+numerodos;
		


		if(resultadosuma>0)		
		{
			
			document.write("el resultado de la suma es POSITIVO"+"<br>");			
		}
		else 
		{	if(resultadosuma<0)
			{
			
			
				document.write("el resultado de la suma es NEGATIVO"+"<br>");
			}
			else
			{
				resultadosuma==0;
				document.write("el resultado de la suma es CERO "+"<br>");
			}		
		}


}//FIN DE LA FUNCIÓN