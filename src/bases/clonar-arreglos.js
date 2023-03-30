// aqui indico que quiero clear un array de 100 elementos
const arreglo = new Array(100); 

// Para declarar arrays se aconseja hacerlo asi:
const array = [1,2,3,4];

//Para innsertar no se aconseja hacerlo con "push()"
//porque modifica el objeto es mejor usar los tres puntos spret

let array2 = array;
array2.push(5);

console.log("Vemos que se modifico tambien el array por eso usar loa tres puntos `...`")
console.log(array2);
console.log(array);



console.log("Aqui usamos tres puntos `...` asi clonamos el valor de 'array'")
array2 = [...array, 6];

console.log(array2);
console.log(array);


/* *********** Funciones ********* */
const array3 = array2.map(num => num*2); // map() crea un  nuevo arreglo, esto rompe la referencia retornando un nuevo array (nuevo clon)
console.log(array3);