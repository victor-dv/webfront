
const img = document.querySelector('.dice')
const player = document.getElementById("player--active")
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const score = document.querySelector(".score--0")
let numeroCurrent = 0
const rollDice = document.querySelector('.btn--roll').addEventListener('click', function () {
    let numeroAleatorio = Math.trunc(Math.random() * 6) + 1
    img.src = `img/dice-${numeroAleatorio}.png`
    numeroCurrent += numeroAleatorio
    const current0 = document.getElementById('current--0')
    current0.textContent = numeroCurrent

    if (numeroAleatorio === 1) {
        numeroCurrent = 0
        current0.textContent = 0
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
   
        if (player1.classList.toggle('player--active')) {
            const current1 = document.getElementById('current--1')
            numeroCurrent += numeroAleatorio
            current1.textContent = numeroCurrent
            alert("kakaka")
        }
    }
})

const hold = document.querySelector('.btn--hold').addEventListener('click', function () {
    score = current0.textContent
    player1.classList.toggle('player--active')
    player0.classList.toggle('player--active')

})
