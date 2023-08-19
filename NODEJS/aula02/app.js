//AULA 03

const http = require('http');
const { json } = require('stream/consumers');
/* verbos hhtp
Get - pegando recursos dados do servidor
POST - Utilizamos para gravar recurso
*/


const server = http.createServer(function (req, res) {
    if (req.url === '/login' && req.method == 'POST') {
        console.log("Caiu em dada")
        res.end("Tudo certo por aqui")
        /* Se a requisção for /data e o metodo for POST vai estar tudo certo */

    } else if (req.url === '/signup' && req.method == 'POST') {
        var body = '';
        //fotrma como o node.js recebe os dados de fora
        req.on('data', function (data) {
            body += data      /* Ele pega a variavel olha oq vai chegar e mostra-lo no body */
        })
        req.on('end', function(){
            
            var received = JSON.parse(body) //Conver para JSON
            console.log(received)
            if(received.email === "muca@gmail.com"){
                res.end("Email OK!!!")     /* aqui verifica se o email bate com o que esta sendo enviado */
            }else{
                res.end("Verefique o email")
            }
        })
        return
    } else if (req.url === '/vergatos' && req.method == 'GET') {
        res.end("Todos os gatos disponiveis")
    } else if (req.url === '/gravar' && req.method == 'POST') {
        res.statusCode = 401
        res.end("Sem autorização!!") /* Retornando um erro ao usuario, significa que nao tem autorização nessa parte */
    }else {
        res.end("Verifique...")
    }
})

server.listen(3001, () => {
    console.log("Servidor on...")
})