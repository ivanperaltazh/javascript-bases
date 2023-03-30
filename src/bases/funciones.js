// Funciones

const getUser = () => {
    return {
        uid:'3424',
        username:"pepito"
    }
}

// const es importante para evitar errores como asignaciones:   getUser=20;

// Para retornar un objeto sin usar return, solo con => poner entre parentesis el objeto:
// Para valores primitivos como string no hace falta parentesis: const getHola = () => 'Holamundo'
const getUser2 = () => 
   ({
        uid:'123',
        username:"juanito"
    })

const user = getUser2(); 
console.log(user);