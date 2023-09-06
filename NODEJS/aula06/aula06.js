//Iniciando o express com nodejs
/* instalano 
roteando */
const express = require('express')
const app = express()
const port = 3000

import{createConection} from'mysql'
var con = mysql.createConnection({ 
host: "localhost", 
user: "root",
password: "Lindao02*", 
database: "estoque"
})

//Vamos inserir os endpoints
app.get('/', (req,res) =>{
  con.query("Select *from camisa",function(err, result, fields){

    if(err) throw err
    console.log(result)
    res.json(result)
})
})


//iniciando o server
app.listen(port, () => {
    console.log("Servidor subido")
} )