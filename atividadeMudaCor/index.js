//querySelectorall devolve uma lista 
const minhaDiv = document.getElementById("minha-div")
const elementos = document.getElementById("elementos")
//Criar a lista com as cores
const listColors = [
    { cor: 'blue', nome: 'Azul' }, 
    { cor: 'yellow', nome: 'Amarelo' },
    { cor: 'green', nome: 'Verde' },
    { cor: 'grey', nome: 'Cinza' },
    { cor: 'gold', nome: 'Dourado' },
    { cor: 'white', nome: 'Branco' },
]
//Criar elementos a partir da lista
listColors.forEach(elemento => {
    //Criei o botão e em seguida, atribuir os valores
    let buttonColor = document.createElement('button')
    //Propriedades do botão
    buttonColor.id = elemento.cor
    buttonColor.textContent = elemento.nome
    buttonColor.style.borderColor = elemento.cor
    buttonColor.style.color = 'black'   
    //Adcionei o listener...
    buttonColor.addEventListener('click', () => {
        minhaDiv.style.backgroundColor = elemento.cor
    })
    elementos.appendChild(buttonColor)
})
/* colorsA.forEach(element =>{
    colorA.addEventListener('click',()=>{
     minhaDiv.style.backgroundColor = element.id
        
    })

}) */

