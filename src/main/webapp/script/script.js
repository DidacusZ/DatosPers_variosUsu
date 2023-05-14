var id="";
function guardarDatos(){

let edad = document.getElementsByName('edad')[0].value;
let nombre = document.getElementsByName('nombre')[0].value;
let apellidos = document.getElementsByName('apellidos')[0].value;
let dni = document.getElementsByName('dni')[0].value;

if(localStorage.getItem("id") == null)
	localStorage.setItem("id", 0);
	
id = parseInt(localStorage.getItem("id"));

localStorage.setItem("id", id+1);

localStorage.setItem(id+"nombre", nombre);
localStorage.setItem(id+"apellidos", apellidos);
localStorage.setItem(id+"edad", edad);
localStorage.setItem(id+"dni", dni);

window.open("mostrarDatos.html")

for(let i=1;i<=id;i++)
	{		
		document.write("<br><br>Usuario numero "+i)
		document.write("<br>Nombre: "+localStorage.getItem(i+"nombre"))
		document.write("<br>Apellidos: "+localStorage.getItem(i+"apellidos"))
		document.write("<br>Edad: "+localStorage.getItem(i+"edad"))
		document.write("<br>DNI: "+localStorage.getItem(i+"dni"))		
	}

}

function MostrarDatos(){

for(let i=1;i<=id;i++)
	{		
		document.write("<br><br>Usuario numero "+i)
		document.write("<br>Nombre: "+localStorage.getItem(i+"nombre"))
		document.write("<br>Apellidos: "+localStorage.getItem(i+"apellidos"))
		document.write("<br>Edad: "+localStorage.getItem(i+"edad"))
		document.write("<br>DNI: "+localStorage.getItem(i+"dni"))		
	}
}


