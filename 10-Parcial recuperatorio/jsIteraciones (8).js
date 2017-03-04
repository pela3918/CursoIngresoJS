function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	var numeropar;
	var contadornumeropar=0;
	var acumulador=0;
	var numerominimo;
	var numeromaximo;
	var maximo;
	var minimo;
	var promedio;
	
	
	while(respuesta!="no" )//EJERCIO 8 NIVEL 5
	{
		
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		contador++;
		acumulador=acumulador+numero;

		while(numero<0)
		{
			numero=prompt("reingrese numero");
			numero=parseInt(numero);

		}		
		if(numero%2==0)
		{	
			
			contadornumeropar++;
		}
		promedio=acumulador/contador;		

		if(contador==1)
		{
			maximo=numero;			
			minimo=numero;
			numeromaximo=numero;
			numerominimo=numero;
				
		}
		else
		{			 
				 	
			if(numero>maximo)
			{
				 		
				 maximo=numero;
				 numeromaximo=numero;

			}	
			if(numero<minimo)
			{
				 minimo=numero;
				 numerominimo=numero;

			}
			
		}	
			
			
			respuesta=prompt('Para salir teclee no');
	}		

document.write("la cantidad de numeros pares es :"+contadornumeropar+ "<br>");
document.write("el maximo es  :"+numeromaximo+"<br>");
document.write("el minimo es  :"+numerominimo+"<br>");
document.write("la suma es  :"+acumulador+"<br>");
document.write("el promedio es  :"+promedio+"<br>");



} //FIN DE LA FUNCIÓN