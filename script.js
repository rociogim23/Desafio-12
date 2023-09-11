let boton = document.getElementById("btnEnviar");
let contenedor = document.getElementById("comments-container");


fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data =>{

let contenedor = document.getElementById("comments-container");

    for(let i = 499 ; i > 489 ; i--){
        contenedor.innerHTML+=
        `
        <p>${data[i].body}</p>
        
        `

    }
   
    
})

// boton.addEventListener("click",function(){
//     let comentario = document.createElement("p");
//     let contenido = document.getElementById("comment").value.trim;

//     comentario.innerText(contenido);

//     contenedor.appendChild(comentario);
// });

function crearCardComentario(comentario) {
	
	let card = document.createElement("p");

	card.innerText = `
    ${comentario}
	`;

	return card;
}

boton.addEventListener("click", function (e) {
    e.preventDefault();
    let contenedor = document.getElementById("comments-container");
    const comentarioNuevo = document.getElementById("comment").value;
       
        
    
    const cardComentario = crearCardComentario(comentarioNuevo);

    
    contenedor.appendChild(cardComentario)
})





