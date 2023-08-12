/* 1 passo para criar um servidor */

const http = require('http');

/* 2 passo criando servidor  */
const myServer = http.createServer((req, res) => {
    console.log(req.url)
    /* Definindo rotas */
    if (req.url === '/products') {
        res.end("<h1>Mostrando produtos</h1>")

    } else if (req.url === '/save') {
        res.end("<html><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRotol1CtCu8H5MNixr8DF3zlecKyti-JIg&usqp=CAU' alt=''></html>")


    } else if (req.url === '/botao') {
        res.end (`
        <html>
        <h1>Clique aqui</h1>
          <button>Clique aqui</button>
        
        </html>
        
        `)

    } else {
        console.log("Nao conheço")
    }

})

myServer.listen(8080, () => {
    console.log("Servidor esta no ar...")

})