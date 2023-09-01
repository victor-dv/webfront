//Iniciando o express com nodejs
/* instalano 
roteando */
const express = require('express')
const app = express()
const port = 3000

//Vamos inserir os endpoints
app.get('/', (req,res) =>{
 
    const listCars = ['w','fiat','ford', 'Honda']
    const myModel = {
        cars: listCars
    }

    res.json(myModel)
} )

//iniciando o server
app.listen(port, () => {
    console.log("Servidor subido")
} )