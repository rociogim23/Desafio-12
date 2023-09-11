let boton = document.getElementById("btnEnviar");






fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data =>{
let contenedor= document.getElementById("comments-container")



    for(let i = 499 ; i > 489 ; i--){
        contenedor.innerHTML+=
        `
        <p>${data[i].body}</p>
        
        `

    }
   

})






