
let names = ["Samuel", "Maria", "Robsom", "Felipe"]
let final = names.find(element => element === "Samuel")
console.log(final) /* Estamos fazendo a utilização do find, que pede
para ele  ir na busca do elemento que estamos pedindo */

let nomesOb = [
    {
        id: 1,
        name: "Samuel",
        endereco: "Rua Dart"
    },
    {
        id: 2,
        name: "joao",
        endereco: "Rua Dart"
    },
    {
        id: 3,
        name: "jojoca",
        endereco: "Rua Dart"
    }

]

let euQuero = 2

 final = nomesOb.find(item => item.name === euQuero)
