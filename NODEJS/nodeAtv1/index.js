const http = require('http')

const myServer = http.createServer((req,res) => {
    console.log(req.url)

    if(req.url === "/login"){
    res.end(
        `
        <html>
        <input type="email">
        <input type="senha">
        <button>venha</button>
        </html>
        `
    )
}else if(req.url === "/imagem"){ 
    res.end (
        `
        <html>
        <h1>yeah</h1>
        <img src="https://conteudo.imguol.com.br/c/noticias/2015/04/15/garoto-do-meme-sucess-kid-ajuda-pai-a-arrecadar-dinheiro-para-transplante-de-rim-1429137312059_300x200.jpg.webp" alt="">
        </html>
        <p>Consegui</p> 
        `

    )
}else if(req.url === "/video"){
    res.end(
        `
        <html>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9zRzLeAR8Uk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </html>
        `
    )

}else{
  
    res.end(
        `
        <html>
        <img src="https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg?q=10&h=200" alt="">
        </html>
        `
    )
}


})

myServer.listen(8080, () =>{
    console.log("Esta no ar asmigo")

} )