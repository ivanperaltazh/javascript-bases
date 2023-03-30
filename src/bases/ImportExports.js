import  heroes , {owners as ow}  from "./data/heroes.js"; // poner .js es opcional
// Para que funcione el import añadir ( "type": "module",) en el packge.json

// ****las exportaciones por defecto "export default" no se puden renombrar al importar
// *** Solo se puden renombrar exportaciones que no son por defecto como "owners"

//import  {heroes, owners}  from "./data/heroes.js";

export const getHeroeById = (id) => heroes.find(heroe =>  heroe.id === id);  
console.log(getHeroeById(5));

export const getHeroeByOwner = (owner) => heroes.filter(heroe =>  heroe.owner === owner);  
console.log(getHeroeByOwner('DC'));

console.log(heroes);
console.log({ow});



