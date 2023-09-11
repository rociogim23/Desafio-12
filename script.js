let boton = document.getElementById("btnEnviar");
let contenedor = document.getElementById("comments-container");


fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data =>{

let contenedor = document.getElementById("comments-container");

    for(let i = 499 ; i > 489 ; i--){
        contenedor.innerHTML+=
        `
        <p>${data[i].body}        
        `
    }
   
    
})


function crearRatingEstrellas(puntaje) {
    const maxEstrellas = 5;
    const ratingEstrellas = document.createElement("div");

    for (let i = 1; i <= maxEstrellas; i++) {
      const estrella = document.createElement("span");
      estrella.classList.add("fa", "fa-star");
      if (puntaje >= i) {
        estrella.classList.add("rating");
      }
      ratingEstrellas.appendChild(estrella);
    }

    return ratingEstrellas;
}

function crearCardComentario(comentario) {
    let puntaje = document.getElementById("rating").value;
	let ratingEstrellas = crearRatingEstrellas(puntaje);
	let card = document.createElement("p");
    card.classList.add("p-style");

	card.innerText = `
    ${comentario} - 
	`;

    card.appendChild(ratingEstrellas);

	return card;
}

boton.addEventListener("click", function (e) {
    e.preventDefault();
    let contenedor = document.getElementById("comments-container");
    const comentarioNuevo = document.getElementById("comment").value;
       
        
    
    const cardComentario = crearCardComentario(comentarioNuevo);

    
    contenedor.appendChild(cardComentario)
})





