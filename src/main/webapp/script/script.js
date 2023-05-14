function guardarDatos(){
		
let edad = document.getElementsByName('edad')[0].value;
let nombre = document.getElementsByName('nombre')[0].value;
let apellidos = document.getElementsByName('apellidos')[0].value;

localStorage.setItem("nombre", nombre);
localStorage.setItem("apellidos", apellidos);
localStorage.setItem("edad", edad);
		
window.open("mostrarDatos.html")

}

function MostrarDatos(){

document.write("Nombre: "+localStorage.getItem("nombre"))
document.write("<br>Apellidos: "+localStorage.getItem("apellidos"))
document.write("<br>Edad: "+localStorage.getItem("edad"))

}
