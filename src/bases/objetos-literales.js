
const persona = {
    nombre: " juan",
    apellido:"lopez",
    edad: 45,
}

// const persona2 = persona; // esto no clona , solo crea referencia de memoria
const persona2 = { ...persona }; // esto si clona , todas las propiedades con el operador sprect


// Imprimir objetos:
console.log({persona});
console.table(persona);


//CLONAR OBJETYOS;
persona2.nombre = "Peter";
console.log({persona});
console.log({persona2});

