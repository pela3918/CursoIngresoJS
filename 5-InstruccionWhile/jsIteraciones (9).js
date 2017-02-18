function Mostrar()
{

		var contador=0;
		var maximo;
		var minimo;
			// declarar variables
		var edad ;
		var nombre;
		var respuesta='si';
		var NombredelMayor;
		var sexo ;
		var nota ;
		var notaminima;
		var sexonotaminima;
		var aprobados;
		var contadormujeresdesaprobadas=0
		var contadorhombresdesaprobados=0
		var promediodenotas;
		var acumuladornotas;
		var promediodelasmujeres ;
		var mujeresmenores;
		var bandera="nadie" ;
		var nombredel10;
		var edaddel10;
		var sexodel10;

		while(respuesta!='no')
		{
			
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
			while(edad > 0 || edad <100)
			{
				edad=prompt("ingrese edad");
				edad=parseInt(edad);
			}
			sexo=prompt("Ingrese f o m");
			sexo=parseInt(edad);
			while(sexo!="f" && sexo!="m")			
			{
				sexo=prompt("Ingrese f o m");
				sexo=parseInt(edad);

			}
			// promedio de la edad de las mujeres
			if(sexo="f" && nota > 3);
			{

			}
			//la cantidad de mujeres que aprobaron con nota par y son menores de edad

			if(sexo="f" && nota > 3 && nota p )
			{
				mujeresmenores=mujeresmenores+1


			}	
			

			nota=prompt("ingrese nota");
			while(nota>0 || nota <11 )
			{
				nota=prompt("reingrese nota");
			}
			if(nota==10 && bandera=="nadie")// datos del primero que se saco 10
			{
				nombredel10=nombre;
				sexodel10=sexo;
				edaddel10=edad;
			}	




			if(nota > 3)
			{
				aprobados=aprobados+1;

			}			

			contador++;
			nombre=prompt("ingrese nombre");

			if(contador==1)// cantidad de personas aprobadas
			{
				maximo=edad;
				minimo=edad;
				NombredelMayor=nombre

			}
			 else
			{			 
			 	
			 	if(edad>maximo)
			 	{
			 		
			 		maximo=edad;
			 		Nombre=NombredelMayor;

			 		
			 	}	
			 		if(edad<minimo)
			 	{
			 		minimo=edad;
			 		
			 	}	


			 }	




			respuesta=prompt("para salir tecle no");
		
	
		}




}//FIN DE LA FUNCIÓN