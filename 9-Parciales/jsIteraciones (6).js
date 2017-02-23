function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var nota ;
	var sexo ;
	var respuesta ="si";
	var promedio;
	var notamasbaja;
	var notamasalta;
	var maximo;
	var minimo;
	var sexo;
	var varonesaprobaronmayoriguala6;
	var acumuladorvarones=0;


	while(contador<100 && respuesta!="no")//EJERCIO 7 NIVEL 4
	{
		


		nota=prompt("ingrese nota");
		nota=parseInt(nota);

		while(nota<0 || nota>10)
		{	
			nota=prompt("reingrese la nota");
			nota=parseInt(nota);

		}
		sexo=prompt("ingrese f o m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese f o m");
		}	
		acumulador=acumulador+nota;
		if(sexo="m"&& nota>5)
		{
			acumuladorvarones++
		}	
		if (contador==0)
		{
			maximo=nota;
			minimo=nota;
			notamasbaja=minimo;
			notamasalta=maximo;			
		}
		else
		{
			if(nota<minimo)
			{
				minimo=nota;
				notamasbaja=nota;
			}
		}	





		contador++;

		respuesta=prompt('Para salir teclee no');

	}
	promedio=(acumulador/contador);	



alert("la suma total de las notas es :"+acumulador);
alert("el promedio totasl de las notas es :"+promedio);
alert("la nota mas baja es :"+notamasbaja);
alert("la cantidad de varones aprobado con la nota mayor o igual a 6 son :"+acumuladorvarones);


}//FIN DE LA FUNCIÓN