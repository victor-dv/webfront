//Criando objeto JavaScript 
//1. Forma Literal
const userName = document.getElementById("name") 
const prod = document.getElementById("product")
const color = document.getElementById("cor")
const button = document.getElementById("btn")

const person = {
    name: "Samuel Santos",
    born: 2005,
    mes: 12,
    day: 11,
    weight: "98kb",
    gender: "Mininu",
    height: 1.83,
    family: {
        wife: "Dora Santos",
        son: "Felipe Santos",
        son2: "Luis Antonio"
    },
    cars: ["Dodge", "Fit", "HIllux", "BMW", "Ferrari"], //[] -Significa array
    work: {
        company: "Senai-SP",
        address: "Rua Direita, 222",
        ocuppation: "Instutot PIII",
        salary: "116.235,89"
    },

    /// Criando metodos
calcAge: function(){
    var d = new Date;
    anoAtual = d.getFullYear(),
    mesAtual = d.getMonth() + 1,
    diaAtual = d.getDate(),

    this.born = +this.born,
    this.mes = +this.mes,
    this.day = +this.day,

    currentData = anoAtual - this.born;

    if(mesAtual < this.mes || mesAtual == this.mes && diaAtual < this.day ){
        return currentData 
        

    }





  /*   const currentData = this.hoje.getFullYear() - this.born.getFullYear()
    if(new Date(this.hoje.getFullYear(), this.hoje.getMonth(), this.hoje.getDate()) <
    new Date (this.hoje.getFullYear(), this.mes.getMonth(), this.born.getDate() ) ) 
    return currentData.getFullYear() - this.born;
    return currentData */

}
}

 //atributos

let produto = {}
let produtos = []

button.addEventListener('click', ()=>{

    produto = {
        // Gera id randomico arredondando
        id: Math.floor(Math.random() * 21),
        name:prod.value,
        color: color.value
    }
    //Metodos para adicionar Lista
    produtos.push(produto)
    console.log(produtos)
    
    console.log(person.calcAge())
})


userName.textContent = person.name


// formas de accessar
//1. person.(nome atrinbuto)
//2.person["nome atributo"]


// pedir dado novo
// if ajustar 