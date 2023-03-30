

const activo = true;

let mensaje = '';

if (!activo){
    mensaje = 'Activo'
} else{
    mensaje = 'Inactivo'
}
console.log(mensaje);

// Operador tersiario:
const menssage = activo ? 'Activo':'Inactivo';
console.log(menssage);


// Si queremos que no haga nada en caso de no cumplir la condicion:
// usamos && es un  if corto, que si no cumple condicion retorna false

//const mensj = (activo === true) && 'Activo';
// si argunmento de izquierda es decir el primero es true retorna lo de la derecha sino false
// es decir si argumento de izquierda el false ya no sigue evaluando lo siguiente.
const mensj = !activo && 'Activo'; 
console.log(mensj);