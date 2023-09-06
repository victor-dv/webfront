
const img = document.querySelector('.dice')
const player = document.getElementById("player--active")
let numeroCurrent0 = 0
let currentPlayer = 2
const rollDice = document.querySelector('.btn--roll').addEventListener('click', function(){
    let numeroAleatorio = Math.trunc(Math.random() * 6) + 1
    switch(numeroAleatorio){
        case 1:
            img.setAttribute("src", "img/dice-1.png")
            break;
        case 2:
            img.setAttribute("src", "img/dice-2.png")
            break
        case 3:
            img.setAttribute("src","img/dice-3.png")
            break
        case 4:
            img.setAttribute("src", "img/dice-4.png")
            break
        case 5:
            img.setAttribute("src", "img/dice-5.png")
            break
        case 6:
            img.setAttribute("src", "img/dice-6.png")
          break
    }

    numeroCurrent0 += numeroAleatorio
    const current0 = document.getElementById('current--0').textContent = numeroCurrent0  
  
    if(numeroAleatorio === 1 ){
        alert("proximo jogador")
    }
})
currentPlayer = (currentPlayer == 2) ? 1 : 2

const hold = document.querySelector('.btn--hold').addEventListener('click', function(){
    const score0 = document.getElementById('score--0').textContent = numeroCurrent0
    let numeroCurrent1 = 0
    document.querySelector('.player--active')
    numeroCurrent1 += numeroAleatorio
    const current1 = document.getElementById('current--1').textContent = numeroCurrent1  
})
