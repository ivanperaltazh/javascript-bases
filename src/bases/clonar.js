
let persona = {
    nombre:"Juan",
    apellido:"Perez",
    edad:45,
    direccion:{
        ciudad: "New York",
        zip: 389484,
        lat: 14.5656,
        long: 2383823,
    }
}

// Aqui no veo el nombre de la variable:
console.log(persona);

// Si quiero saber el nombre de la variable:
console.log({persona});
// Es igual a:
console.log({persona:persona});

// Ver objeto como tabla:
console.table(persona);
console.table({persona});


// CLONAR OBJETO
console.log("*****CLONAR OBJETO*******");
// con esto no copiamos el valor del objeto sino solo la referencia de la variable
// NOTA: si fuesen varaibles simples es decir no objetos, al hacer esto si se clonaria
let persona2 = persona; 

// Aqui comprovamos que es una referencia, al cambiar 
//nombre en persona2 se cambia tambien en persona
persona2.nombre = "Peter";
console.log({persona2});
console.log({persona});

console.log("*****CLONAR OBJETO de MANERA CORRECTA*******");
persona2 = { ...persona }; // con LOS TREs PUNTOS EL SPRET,clonnamos corectamente el objeto

// Aqui comprovamos que se clono bien 
//nombre en "persona2" es diferente en "persona"
persona2.nombre = "Carlos";
console.log({persona2});
console.log({persona});
