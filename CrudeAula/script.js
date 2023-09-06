const http = require('http')

//Para leitura de arquivos vamos imoirtar o package "fs"
const fs = require('fs')
/* Database */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lindao02*",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});
/* con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
 */
const { json } = require('stream/consumers')

//Criar uma função que pega dois params: response e o file
function readFile(response, file) {
    fs.readFile(file, function (err, data) {
        console.log(err)
        //Responde para o usuario com os dados do arquivo
        response.end(data)
    })
}

//Criar o servidor
const server = http.createServer((request, Response) => {
    //Vamos criar os endpoints da API
    //dependendo da regra de negocios, criaremos os nosso endpoint
    if (request.url === '/package') {
        readFile(Response, 'package.json')
    } else {
        Response.end(json.stringfy({
            error: true,
            message: "Data not found..."   /* Para retornar r=erros */
        }))
    }
})

//3° Passo => abrir a porta para ouvir o servidor
server.listen(3001, () => {
    console.log("Servidor no ar...")
})
