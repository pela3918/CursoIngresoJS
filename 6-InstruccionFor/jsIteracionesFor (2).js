function Mostrar()
{
	var contador=0 ;
	var edad ;
	var sexo ;
	var mascota;
	var contadormascota=0;
	var edadgato;
	var bandera="nadie";
	var nombredelprimergato;
	var contadornomascota=0;
	var edadmasvieja;
	var edadmasviejasinmascota;
	var maximo ;
	var minimo;
	var edadmasjoven;



	for(;contador<2;)
	{
		edad=prompt("ingrese edad");
		sexo=prompt("ingrese sexo");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("reingrese sexo");
		}
		mascota=prompt("posee mascota?");
		while(mascota!="si" && mascota!="no")
		{
			mascota=prompt("confirme por si o por no ");
		}	
		if(mascota=="si")
		{
			contadormascota++;
			tipodemascota=prompt("especifique que tipo de mascota tiene");
			while(tipodemascota!="perro" && tipodemascota!="gato")
			{
				tipodemascota=prompt("reingrese si tiene un perro o un gato ");
			}
			if(tipodemascota=="gato" && edad>29 && sexo== "f")
			{
				edadgato=prompt("ingrese la edad del gato ");
				edadgato=parseInt(edadgato);
				while(edadgato>15)
				{
					edadgato=prompt("reingrese la edad del gato ");
					edadgato=parseInt(edadgato);
				}
				if(edadgato<=5 && bandera=="nadie" )
				{
					nombredelprimergato=prompt("ingrese nombredelprimergato");
					bandera="alguien" ;

				}

			}

		}
		else
		{
			contadornomascota++
		}
		if(contador==0)
		{
			maximo=	edad;
			minimo=edad;			
			edadmasvieja=edad;
			edadmasjoven=edad;
			
		}
		else
		{

			if(edad<maximo)
			{
				maximo=edad
				edadmasvieja=edad;
			}
			if(edad>minimo)
			{
				minimo=edad;
				edadmasjoven=edad;

			}					

							

		}
		if(mascota=="no" && edad==edadmasvieja)
		{
			edadmasviejasinmascota=edadmasvieja;
		}


		contador++;
	}	




}