let numeroSecreto = Math.trunc(Math.random()* 20) + 1
let score = 20                                        /* Criando variaveis de score, numero secreto e highscore */
let hisghore = 0

const mensagemAparecer = function(message){
    document.querySelector('.message').textContent = message            /* Importando o mensagem para utilizar mais tarde */
}

console.log(numeroSecreto)
document.querySelector('.check').addEventListener('click', function(){         /* Criando a função click para o botão check */
    const adivinha = Number(document.querySelector('.guess').value)                     

 if(adivinha === numeroSecreto){
    mensagemAparecer("Acertou!!! Very cool!!! ✅✅✅")
    document.querySelector('.number').textContent = numeroSecreto           /* Se o numero inserido for igual ao numero secreto vai executar essas ações */
    document.querySelector('body').style.backgroundColor = "#16f006";
  
    if(score > hisghore){
       hisghore = score;
       document.querySelector('.highscore').textContent = hisghore       /* Aqui estou passando para o highscore armazenar o maior score*/
    }
} else if (adivinha !== numeroSecreto){       /* Se o numero inserido for diferente do numero secreto */
    if(score > 1){        /* So vai permitir continuar as jogadas se tiver score para jogat */
        mensagemAparecer(adivinha > numeroSecreto? "Está acima ⬆️ " : "Está abaixo ⬇️  "  )  /* ? : utilizado como se fosse o if else onde antes do (?) passo uma condição e após (true : false) */
        score --
        document.querySelector('.score').textContent = score
    }else{
        mensagemAparecer("Game Over💣💣🔥🔥")
        document.querySelector('.score').textContent = 0
        document.querySelector('.number').textContent = numeroSecreto         /* Se o score for igual a 0 o jogador perde */
    }
}
} )
document.querySelector('.again').addEventListener('click', function(){  /* Criando a funcção de click para o botão again */
score = 20                          /*Reiniciei o valor da variavel score  */
numeroSecreto = Math.trunc(Math.random()* 20) + 1         /* Pedindo para emitir um novo numero randomico */
  console.log(numeroSecreto)           

  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.score').textContent = score           /* Reiniciando as ações do jogo para os valores iniciais*/
  document.querySelector('.guess').value = ''
  document.querySelector('.number').textContent = '?'
  mensagemAparecer("Start guessing...")

})
