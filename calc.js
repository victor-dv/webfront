/* Calculadora */
const numberOne = document.getElementById("number1")
const numberTwo = document.getElementById("number2")
const resultado = document.getElementById("resultado")

function calculo(operacao){
 
    try{
        const finalResult = eval ("Number(numberOne.value)" + operacao + "Number(numberTwo.value)")
        if (isNaN(finalResult) || !isFinite(finalResult)) {
            alert("Error...")
            return
        }
        resultado.textContent = finalResult
       
        if( finalResult >= 0 & finalResult <= 50){
            resultado.style.color = "red"
        }else if( finalResult >= 50 & finalResult <=100){
            resultado.style.color = "blue"
        }else{
            resultado.style.color = "green"
        }

      
    }catch(error){
        alert(error)
    }

}

/* Maior q 0 === cor vermelha
Maior 50 === cor azul
Maior 100 == cot verde

*/


    
    /*Switch(operacao)
    
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
        break */





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

