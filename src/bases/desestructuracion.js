// Desestructuracion

const persona = {
    nombre: "Juan",
    edad:45,
    clave:"frefe"
}

//Forma comun ver valores de propiedades del objeto:
console.log(persona.nombre);
console.log(persona.clave);
console.log(persona.edad);


/* *** Ahora usando Asignacion  desestructurante **** */
// ponemos dar otro nombre a varible:
const { nombre: nomb2} = persona;
console.log(nomb2); // si aqui intentamos imprimir "nombre" da error porque se cambio



// no importa el orden:
const{ clave, edad, nombre} = persona;

console.log(nombre);
console.log(clave);
console.log(edad);


// Desestructuracion directamente en el argumento de funcion:
// tambien se puede poner valores por defecto -> rango= "admin" y propiedades que no existe en persona

// const returnUsuario = ( persona )=>{
const returnUsuario = ({nombre, edad, rango= "admin"})=>{
 console.log(nombre, edad, rango);
}

returnUsuario(persona);


//Desestructuracion en la salida de la funcion
const user = ({nombre, edad}) => {
    return {
           nombreClave: nombre,
           anios:edad,
           latlong:{
               lat:14.034,
               long:-12.001
           }
         }
}

const avenger = user(persona);
console.log(avenger);

const {nombreClave, anios, latlong} = user(persona);
const { lat, long} = latlong;
console.log(nombreClave, anios, lat, long);

//Tambien se puede hacer asi:
//const {nombreClave, anios, latlong:{lat,long}} = user(persona);
//console.log(nombreClave, anios, lat, long);

