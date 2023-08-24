let numeroSecreto = Math.trunc(Math.random()* 20) + 1
let score = 20
let hisghore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}
console.log(numeroSecreto)
document.querySelector('.check').addEventListener('click', function(){
    const adivinha = Number(document.querySelector('.guess').value)

 if(adivinha === numeroSecreto){
    displayMessage("Acertou!!! Very cool!!! ✅✅✅")
    document.querySelector('.number').textContent = numeroSecreto
    document.querySelector('body').style.backgroundColor = "#16f006";
  
    if(score > hisghore){
       hisghore = score;
       document.querySelector('.highscore').textContent = hisghore
    }
} else if (adivinha !== numeroSecreto){
    if(score > 1){
        displayMessage(adivinha > numeroSecreto? "Está acima ⬆️ " : "Está abaixo ⬇️  "  )
        score --
        document.querySelector('.score').textContent = score
    }else{
        displayMessage("Game Over💣💣🔥🔥")
        document.querySelector('.score').textContent = 0
        document.querySelector('.number').textContent = numeroSecreto
    }
}
} )

  document.querySelector('.again').addEventListener('click', function(){
    score = 20
    numeroSecreto = Math.trunc(Math.random()* 20) + 1
    console.log(numeroSecreto)

    displayMessage("Start guessing...")
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = "#222";


})
