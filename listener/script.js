
/* Criar componentes HTML
--Vamos usar o innerHTML
--Usar a concatenação de Javascript

`` - voce utiliza a crase para dar multilinhaas, e eu posso acessar variaveis cm ${}
*/

const titulo = document.getElementById("titulo")
const buttonAdd = document.getElementById("button") 
const minhaDiv = document.getElementById("minha-div")
const userName = document.getElementById("nome")

buttonAdd.addEventListener('click', ()=>{
minhaDiv.innerHTML = `
 <h1>Olá:</h1>
 <h2>${nome.value} </h2>

`

}
)

titulo.addEventListener(
    "click", function(){
        titulo.textContent = "Mudei mesmo"
        titulo.style.color = "yellow"
        titulo.style.backgroundColor = "red"

    }
)
