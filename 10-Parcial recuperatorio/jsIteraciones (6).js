function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var edad ;
	var sexo ;
	var respuesta ="si";
	var promedio;	
	var maximo;
	var minimo;
	var sexo;	
	var acumuladorvarones=0;
	var edadmasbaja;
	var edadmasalta;


	while(contador<100 && respuesta!="no")//EJERCIO 7 NIVEL 4
	{
		


		edad=prompt("ingrese edad");
		edad=parseInt(edad);

		while(edad<0 || edad>100)
		{	
			edad=prompt("reingrese la edad");
			edad=parseInt(edad);

		}
		sexo=prompt("ingrese f o m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("reingrese f o m");
		}	
		acumulador=acumulador+edad;
		if(sexo="m"&& edad>19)
		{
			acumuladorvarones++
		}	
		if (contador==0)
		{
			maximo=edad;
			minimo=edad;
			edadmasbaja=minimo;
			edadmasalta=maximo;			
		}
		else
		{
			if(edad<minimo)
			{
				minimo=edad;
				edadmasbaja=edad;
			}
			if(edad>maximo)
			{
				maximo=edad ;
				edadmasalta=edad;

			}	
		}	





		contador++;

		respuesta=prompt('Para salir teclee no');

	}
	promedio=(acumulador/contador);	




alert("el promedio de la edad es :"+promedio);
alert("la edad mas baja es :"+edadmasbaja);
alert("la cantidad de varones que su edad se mayor o igual a 20 es  :"+acumuladorvarones);


}//FIN DE LA FUNCIÓN