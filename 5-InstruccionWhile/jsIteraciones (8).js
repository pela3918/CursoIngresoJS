function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta
	
	var respuesta='si';
	while(respuesta=='si')
	{
		contador++;
		numero=prompt("Ingresando numeros");
		if(numero>0)
		{	
			positivo=positivo+numero;
			respuesta=prompt("Ingrese si para continuar");	

		}	
		if(numero<0)
		{
			negativo=negativo*numero;
			respuesta=prompt("Ingrese si para continuar");
		}	



	}	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN