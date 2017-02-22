function Mostrar()
{

		var contador=0;
		var maximo;
		var minimo;
		var respuesta="si";
		var ventas ;
		var ventamaxima;
		var ventaminima;
		

		while(contador<24 && respuesta!='no')
		{		
			ventas=prompt("ingrese ventas ");
			ventas=parseInt(ventas);

			
			if(contador==0)// cantidad de personas aprobadas
			{
				maximo=ventas;
				minimo=ventas;
				ventaminima=minimo;
				ventamaxima=maximo;			

			}
			else
			{			 
			 	
			 	if(ventas>maximo)
			 	{
			 		
			 		maximo=ventas;
			 		ventamaxima=ventas;
			 		
			 	}	
			 	if(ventas<minimo)
			 	{
			 		minimo=ventas;
			 		ventaminima=ventas;			 		
			 	}

			}


				contador++
				respuesta=prompt('Para salir teclee no');

		}	 


		



alert("la venta minima en 24 dias es :"+ventaminima);
alert("la venta maxima en 24 dias es :"+ventamaxima);

					
	
		




}//FIN DE LA FUNCIÓN