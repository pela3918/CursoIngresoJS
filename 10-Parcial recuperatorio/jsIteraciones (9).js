function Mostrar()
{

		var contador=0;
		var maximo;
		var minimo;
		var respuesta="si";
		var kilos ;
		var maspesado;
		var menospesado;
		

		while(contador<50 && respuesta!='no')// EJERCCIO 6 NIVEL 3
		{		
			kilos=prompt("ingrese kilos de contenedores ");
			kilos=parseInt(kilos);

			
			if(contador==0)// cantidad de personas aprobadas
			{
				maximo=kilos;
				minimo=kilos;
				menospesado=minimo;
				maspesado=maximo;			

			}
			else
			{			 
			 	
			 	if(kilos>maximo)
			 	{
			 		
			 		maximo=kilos;
			 		maspesado=kilos;
			 		
			 	}	
			 	if(kilos<minimo)
			 	{
			 		minimo=kilos;
			 		menospesado=kilos;			 		
			 	}

			}


				contador++
				respuesta=prompt('Para salir teclee no');

		}	 


		



alert("el mas pesado  es :"+maspesado);
alert("el menos pesado es :"+menospesado);

					
	
		




}//FIN DE LA FUNCIÓN