
const apiKey = 'iqfTX6owDBSG77N9mSu3b8hr82cK1ANk';

const peticionHttp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticionHttp
   .then(resp => resp.json()) // esto retorna otra promesa, por lo que puedo usar otro then() abajo
   .then(({ data }) => { //{data} desestructuramos data de respuesta
    console.log(data.images.original.url);
    const {url} = data.images.original;
    //Creamos la imagen en la memoria:
    const img = document.createElement('img');
    img.src = url;
    // POnemos la imagen en el html:
    document.body.append(img);
   })
   .catch(console.warn); // con un sola catch() basta aunque cada then() puede tener un catch()
// Tambien se puede hacer asi pero mas limpio arriba:
/*
peticionHttp
 .then(resp =>{
    resp.json().then(data =>{
       console.log(data)
    })
 })
.catch(err => console.warn(err));
*/

