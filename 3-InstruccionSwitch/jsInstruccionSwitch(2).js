function Mostrar()
{
//tomo la edad  a para el invierno.Ya pasamos el frio, ahora calor!!!
var mesDelAño = document.getElementById('mes').value;
		switch(mesDelAño)
		{
			case "Julio":
			case "Agosto":
			alert("abrigate hace frio");
			break;
			case "Enero":
			case "Febrero":
			case "Marzo":
			case "Abril":
			case "Mayo":
			case "Junio":
			alert("Falta para el invierno");
			break;	
			case "Septiembre":
			case "Octubre":
			case "Noviembre":
			case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;	  

		}


}//FIN DE LA FUNCIÓN