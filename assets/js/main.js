import DetallesPersonajes from './detallesPersonajes.js';

let llamadoPersonajes = (()=>{  // función IIFE
    let urlBase = "https://rickandmortyapi.com/api/character/"; // variable privada de url base de la API
    let resultado = document.querySelector('.resultados'); // variable privada que captura id del html a mostrar resultados
    let charaData; // variable privada que almacenará todos los datos de los personajes
    let getChara = async () => { // 1ra función asíncrona privada para conectarse mediante el método fetch a la URL
       try {
           let response = await fetch(urlBase); // llama a la API
           charaData = await response.json(); // pasa resultados de todos los personaje a variable privada
           console.log(charaData);
           return charaData; // retorna resultados de la promesa de la API
       } 
       catch (error) {   
           console.error(error);
       }
    }
    let getDetails = async (id, image) => { // 2da función asíncrona privada que recibe id a consultar del personaje
      if (id <= 20) { // si la id es menor que 20
        try {
            let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`); // llama a la API con id de personaje
            let detailsData = await response.json(); // pasa resultados en detalle del personaje a variable
 
            let personaje = new DetallesPersonajes(detailsData.id, detailsData.name, detailsData.status, detailsData.species, detailsData.gender, detailsData.created, detailsData.origin.name, detailsData.location.name, detailsData.episode.length); // crea nueva instancia de clase hija DetallesPersonajes
            console.log(personaje); // ver nuevo objeto con datos del personaje en la consola
            personaje.infoGeneral(image, resultado); // llama al método que mostrará al lado de la imagen la información del personaje
            // se envía imagen recibida y variable privada resultados para inyectar al html

            personaje.infoModal(); // llama al método que mostrará informacción detallada en un modal
        }
        catch (error) {   
            console.error(error);
        }
      }
    }
    return {
        mostrarPersonaje: async () => { // 1ra función púlica que permite realizar las consultas a la API y muestra la información
            let infoGeneral = await getChara(); // consulta a la primera función privada y guarda info en variable
            infoGeneral.results.forEach((element,index) => { // recorre el array "results" en busca de la info general
                if (infoGeneral.results[index].id <= 20) {  // si el id es menor o igual a 20 
                    console.log(`Info General: ${element.id} - Imagen - ${element.image}`); // id e imagen obtenidas
                    getDetails(element.id, element.image); // llamado a la segunda función privada para pasar el id de cada personaje y mostrar la información al lado de la imagen
                // ! (inyectar la id y imagen al html desde acá y luego inyectar el resto de los datos aparte con la función infoGeneral(), como pide el desafío, no resultaba, se inyectaba solo el ultimo dato o se apilaba todo solo dentro del personaje 1 de Rick... así que decidí enviar estos datos generales para luego mostrarlos todos juntos en ese método infoGeneral() que está en la clase DetallesPersonajes) :)
                // PD: Creo que habría sido más facil obtener la imagen junto a todos los datos en la función privada getDetails() pero el desafío decía que aquí debía obtener la info general (id, imagen) con la primera función privada y el primer url :/
                }
            });
        },
        eliminarSpinner: () => { // 2da función publica que debe borrar spinner y consultar a la variable privada que contiene los datos de todos los personajes
            let spinner = document.querySelector('.spinner-border');
            spinner.style.display = "none"; // desaparece el spinner
            console.log(`La cantidad de personajes es ${charaData.results.length}`); // consulta cantidad de personajes a variable privada charaData
            cantidadPersonajes.innerHTML = `${charaData.results.length}`; // y ahora muestra el número de personajes
       }
   }
})();

llamadoPersonajes.mostrarPersonaje(); // llamando a primera función pública

setTimeout(()=>{ // se llama a segunda función pública que borra el spinner desde afuera
   llamadoPersonajes.eliminarSpinner(); 
},2000); // en 2 segundos
