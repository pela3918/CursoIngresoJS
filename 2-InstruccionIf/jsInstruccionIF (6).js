function Mostrar()
{
		var edad ;
		edad=document.getElementById('edad').value;
		if(edad > 17)
		{
			alert("es mayor de edad");			
		}
		else if (edad < 18 && edad > 12)
		{
			alert("es adolecente");
		}
		else
		{
			alert("es niño");
		}


}//FIN DE LA FUNCIÓN