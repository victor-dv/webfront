const titulo = document.getElementById("titulo")
//input
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")

//output
const resultadoNome = document.getElementById("resultadoNome")
const resultadoEmail = document.getElementById("resultadoEmail")
const resultadoTelefone = document.getElementById("resultadoTelefone")




function salvar(){
 resultadoNome.textContent = nome.value 
 resultadoEmail.textContent = email.value
resultadoTelefone.textContent = telefone.value

}


