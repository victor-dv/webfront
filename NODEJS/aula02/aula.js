/* Revisão
*1°Criar um servidor http
*2°Ler um arquivo do disco local e servir na web
*3°Gerenciamento de pacotes NPM
*/
//passo 1 = > Importar o pacote http (Package)
const http = require('http')

//Para leitura de arquivos vamos imoirtar o package "fs"
const fs = require('fs')
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
    if (request.url === '/cat') {
        readFile(Response, 'cat.json')

    } else if (request.url === '/dog') {
        readFile(Response, 'dog.json')

    } else if (request.url === '/racao') {
        readFile(Response, 'racao.json')

    } else if (request.url === '/utensilio') {
        readFile(Response, 'utensilio.json')

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

/* Atividade
Criar 4 endpoints relacione a pets. cada endpoint precisara esta relacionado
a um arquivo json com uma lista com 5 ou mais informações
*/