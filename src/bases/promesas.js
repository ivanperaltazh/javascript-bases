import {getHeroeById}  from './bases/ImportExports.js';

// Las promesas tienen un argumento llamado callback qu es un funcion
const promesa = new Promise( (resolve, reject)=>{
   setTimeout(() => {
        let heroe = getHeroeById(2);
        console.log("******",heroe);

       //  resolve(); si no se envia nada se ejecura solo lo que ste en then()
        resolve(heroe); // devemos enviar algo en el resolve() para que muestre al hacer then()
        reject("No se pudo emcontrar el herore");
   }, 2000);
});

// Si la promesa fue correcta es llamada el resolve() que notifica al  "then" dentro del cual se pueden hacer otras cosas 
// es decir  "then" se llama con el resolve();
// "catch" para errores y "finally"· se ejecuta siempre
promesa.then((heroe) =>{
    console.log('Then de la promesa', heroe)
}). catch(err=>console.warn(err));

/* ******************************************* */

const getHeroreByIdAsync = ( id ) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {     
            let heroe = getHeroeById(id);
            console.log("***getHeroreByIdAsync***",heroe);

            heroe ? resolve(heroe) : reject("No se pudo emcontrar el herore");   
        }, 2000);
     });
}

getHeroreByIdAsync(1)
  .then(heroe =>console.log("Herore :", heroe))
  .catch(err=>console.warn(err , "**Error**"))
  .finally( console.log("Termino promesa"));