function Mostrar()
{

		var edad ;
		var estadoCivil;
		edad=document.getElementById('edad').value;
		estadoCivil=document.getElementById('estadoCivil').value;
		if(edad>17 && estadoCivil == "Soltero")
		{
				alert("es Soltero y no menor");
		}


}//FIN DE LA FUNCIÓN