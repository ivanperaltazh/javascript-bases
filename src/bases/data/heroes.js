 
 // si exportamos sin nombre y por defecto si podemos renombra o poner cualquier nombre
 // al importar, pero es mejor poner nombree para saber lo que es:
 // export default = 

 const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export default heroes;
export const owners = ["DC", "Marvel"];


/* UNA SOLA EXPORTACION:
const owners = ["DC", "Marvel"];

export {
    heroes,
    owners
}
//El import para esto seria:
//import  {heroes, owners}  from "./data/heroes.js";
*/


/*
const owners = ["DC", "Marvel"];

export {
    heroes as default,
    owners
}
//El import para esto seria:
//import  heroes, {owners}  from "./data/heroes.js";
*/