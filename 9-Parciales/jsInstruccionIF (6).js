function Mostrar()
{
		var numerouno ;
		var numerodos;
		var producto;
		var resta;
		var suma;
		numerouno=prompt("ingrese numero el primer numero");
		numerodos=prompt("ingrese numero el segundo numero");
		numerouno=parseInt(numerouno);
		numerodos=parseInt(numerodos);


		if(numerouno == numerodos)
		{
			producto=numerouno*numerodos;
			document.write("el producto de ambos numero es :"+producto+"<br>");			
		}
		else 
		{	if(numerouno>numerodos)
			{
			
				resta=numerouno-numerodos;
				document.write("la resta de ambos numero es :"+resta+"<br>");
			}
			else
			{
				suma=numerouno+numerodos;
				document.write("la suma  de ambos numero es :"+suma+"<br>");
			}		
		}


}//FIN DE LA FUNCIÓN