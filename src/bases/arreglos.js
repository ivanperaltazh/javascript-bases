

//const arreglo2 = new Array(100); // solo para arreglos dcon un tamaño inicial
//arreglo2.push(1);


// NO se recomienda usar push porque modifica el objeto proncipal:
const arreglo = [1,2,3,4]; // forma recomendada
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);

// ****** CLONAR ARRAYS:
// let arreglo2 = arreglo; // Esto igual que en los objetos crea una referencia del array y cambia arreglo2 cambia arrglo
let arreglo2 = [...arreglo]; // con el operado sprep se rompe referencia y se clona array
//let arreglo2 = [...arreglo, 5]; //  todos estos elemetos formaran el nuevo array
arreglo2.push(5); 

console.log(arreglo);
console.log(arreglo2);
