
/* Criar componentes HTML
--Vamos usar o innerHTML
--Usar a concatenação de Javascript

`` - voce utiliza a crase para dar multilinhaas, e eu posso acessar variaveis cm ${}
*/

const titulo = document.getElementById("titulo")
const buttonAdd = document.getElementById("button") 
const minhaDiv = document.getElementById("minha-div")

const userName = document.getElementById("nome")
const userProfissao = document.getElementById("profissao")
const userEmail = document.getElementById("email")

buttonAdd.addEventListener('click', ()=>{

const novaTag = document.createElement('div')
novaTag.classList.add("flip-card")
novaTag.innerHTML = `
<div class="flip-card-inner">
  <div class="flip-card-front">
    <img src="../img/pngwing.com.png" style="width:300px;height:300px;">
  </div>
  <div class="flip-card-back">
    <h1>${userName.value}</h1>
    <p>${userProfissao.value}</p>
    <p>${userEmail.value}</p>
  </div>

`

minhaDiv.appendChild(novaTag)


}
)

titulo.addEventListener(
    "click", function(){
        titulo.textContent = "Mudei mesmo"
        titulo.style.color = "yellow"
        titulo.style.backgroundColor = "red"

    }
)
