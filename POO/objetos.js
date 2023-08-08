//Criando objeto JavaScript 
//1. Forma Literal
const userName = document.getElementById("name") 
const prod = document.getElementById("product")
const cor = document.getElementById("color")
const button = document.getElementById("btn")

const person = {
    name: "Samuel Santos",
    age: 45,
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
} //atributos

let produto = {}
let produtos = []

button.addEventListener('clic', ()=>{
    produto = {
        id: Math.floor(Math.random() * 21),
        name:prod.value,
        cor: cor.value
    }
    //Metodos para adicionar Lista
    produtos.push(produto)
    console.log(produto)
})

userName.textContent = person.name


// formas de accessar
//1. person.(nome atrinbuto)
//2.person["nome atributo"]
