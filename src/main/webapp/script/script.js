
class Usuario{
	constructor (dni,edad,apellidos,nombre) {
	    this.dni = dni;
	    this.edad = edad;
	    this.nombre = nombre;
	    this.apellidos = apellidos;
	    }
}

function GuardarDatos(formulario){

//se guardan los datos del formulario
var dni=formulario.dni.value;
var edad=formulario.edad.value;
var nombre=formulario.nombre.value;
var apellidos=formulario.apellidos.value;

//creamos objeto usuario
var usuario = new Usuario(dni,edad,apellidos,nombre);

//guardamos objeto en memoria local/   con dni se guarda en memoria
localStorage.setItem(dni, JSON.stringify(usuario));//JSON.stringify: convierte objeto a cadena JSON

}

function Consultar(formulario2){
	
//guardamos el dni a consultar
var dniConsultar = formulario2.dni.value;

//JSON.parse: convierte cadena JSON a objeto
var obj = JSON.parse(localStorage.getItem(dniConsultar));

//se muestran datos del objeto elegido
document.write("<br>Nombre: "+obj.nombre)
document.write("<br>Apellidos: "+obj.apellidos)
document.write("<br>Edad: "+obj.edad)
document.write("<br>DNI: "+obj.dni)
}
