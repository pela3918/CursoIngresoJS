/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre ;
	nombre=prompt("Ingrese Su nombre");
	document.getElementById('elNombre').value=nombre;
	//al poner = nombre de value me devuelve lo que complete antes , en lugar de usarlo como variable .

	
}
