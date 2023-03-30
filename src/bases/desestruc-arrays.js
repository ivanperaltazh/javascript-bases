//Desestructuracion de arreglos

const personajes = ["Goku", "vegeta", "trucks"];
console.log(personajes[0]);

//Para desestrucuracionde arreglo necesitamos llaves cuadradas
// se pueden usar cualquier nnombre en la variable
// Si alguno no me interesa uso comas para saltarmelo
const [p1, ,trucks] = personajes; // la como precede al un espacio  vacio ignora ese posicion y elemento.
console.log(p1,trucks);

/* *********************************************** */

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

/* *********************************************** */

const estado = (valor) => {
    return [ valor, (nom)=>{console.log(`hola ${nom}`)}]
}

//desestructuramos obteniendo el nombre y la funcion:
const [nombre, saludo] = estado("pepe");
console.log(nombre);
saludo("juancho");
