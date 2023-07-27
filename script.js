/* 
indrotução jaascript */


var nome = "Samuel"
let idade = 45
const anoNascimento = 1977;
let idadeEsposa = "45"


console.log(idade === idadeEsposa);
 let listaCompras = ["Maçã" , "Manga" , "Maracujá", 13, ]

 // se o valor é verdadeiro nao precisa colocar no if === true
 /* var isOld = true;
 if(isOld){

 }
 */

 if (idade === idadeEsposa) {
    console.log ("Igual")
 }
 else if(idade =! idadeEsposa){
    console.log("diferente")
 }else{
    
 }

 /* Array
  accsesando oo array fazendo referencia ao index
 */

  let lista = [1,2,3,4,5,6]

  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];   
    
    console.log(element)
  } 