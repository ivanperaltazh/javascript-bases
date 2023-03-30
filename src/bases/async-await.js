
// const getImagePromesa = () => {
//    const promesa =  new Promise((resolve, reject) => {
//       resolve ('http://jsdshdhs.com')
//   });
//   return promesa;
//  }   

//Forma más corta:
// const getImagePromesa = () => new Promise(resol => resol ('http://jsdshdhs.com'));
// getImagePromesa().then(console.log);


// OTRA forma de manejar promesas, misma funcion anterior usando "Async"
 // Usando "Async" una funcion sincrona normal se convierte en promesa:
 //async crea una promesa sin esto seria solo una funcion sicrona normal

 const getImagenAsync = async() => {
    return 'http://jsdshdhs.com'
 }
 getImagenAsync().then(console.log);



/* **** "await" requiere estar dentro de una funcion "async" ******************** */
// "await" : se usan en promesas, y hace que espere a que termine la promesa antes de pasar a la siguiente liea de codigo y
// luego trabajar como si el codigo fuera sincrono. Permite trabajar una función asincrono como sincrona.

// -"await"  espera una respuesta de fetch() 
//   de la promesa,  antes de ejecutar la siguiente linea de codigo.
// -Para menejo de errores en funicones async se usa el try-catch-
const getImagen = async() => {
 try{
    const apiKey = 'iqfTX6owDBSG77N9mSu3b8hr82cK1ANk';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json(); // json() tambien retorna promesa 
    console.log(data);
    //Obtenemos la url:
    const {url} = data.images.original;
    //Creamos la imagen en la memoria:
    const img = document.createElement('img');
    img.src = url;
    // Ponemos la imagen en el html:
    document.body.append(img);
 }catch(error){
    // manejo del error
    console.log(error, "+++++Error")
 }
 }
 getImagen()
    .then(console.log)

