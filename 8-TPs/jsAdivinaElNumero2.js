/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var ingresenumero; 
var contadorIntentos;
var intentos =0 ;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	ingresenumero=Math.floor((Math.random() * 100 ) + 1);
	alert(ingresenumero);	

}

function verificar()
{
		numeroSecreto=document.getElementById('numero').value;
		intentos++;
		if(numeroSecreto==ingresenumero && intentos==1)
		{
			alert('usted es psíquico');
			intentos= 0 ;
		}
		if(numeroSecreto==ingresenumero && intentos==2)
		{
			alert('excelente percepción');
			intentos= 0 ;
		}
		if(numeroSecreto==ingresenumero && intentos==3)
		{
			alert('Esto es suerte');
			intentos= 0 ;
		}
		if(numeroSecreto==ingresenumero && intentos==4)
		{
			alert('Excelente técnica');
			intentos= 0 ;
		}
		if(numeroSecreto==ingresenumero && intentos==5)
		{
			alert('usted está en la media');
			intentos= 0 ;
		}
		if(numeroSecreto==ingresenumero && intentos>6 && intento <10 )
		{
			alert('falta tecnica')
			intentos=0;
		}
		else if (numeroSecreto==ingresenumero && intentos>10)
		{
			alert('es afortunado en el amor');
			intentos=0;
		}	

}