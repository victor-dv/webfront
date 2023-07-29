/* Calculadora */
const numberOne = document.getElementById("number1")
const numberTwo = document.getElementById("number2")

const resultado = document.getElementById("resultado")

function calculo(operacao){

    switch(operacao){
        case "somar":
            resultado.textContent = Number( numberOne.value ) + Number (numberTwo.value)
            break
            case "subtrair":
            resultado.textContent = Number( numberOne.value ) - Number (numberTwo.value)
            break
            case "dividir":
            resultado.textContent = Number( numberOne.value ) / Number (numberTwo.value)
            break
            case "multiplicar":
                resultado.textContent = Number( numberOne.value ) * Number (numberTwo.value)
            break
    }



   /*  if(operacao === "somar"){
        resultado.textContent = Number( numberOne.value ) + Number (numberTwo.value)
    }else if(operacao === "subtrair"){
        resultado.textContent = Number( numberOne.value ) - Number (numberTwo.value)
    }else if (operacao === "dividir"){
        resultado.textContent = Number( numberOne.value ) / Number (numberTwo.value)
    }else if (operacao === "multiplicar" ){
        resultado.textContent = Number( numberOne.value ) * Number (numberTwo.value)
    }else{
        alert("Nao conheço...")
    } */

}