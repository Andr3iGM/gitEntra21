
const express = require("express")
const app = express()

const porta = 3001
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/livros", function (req, resp) {

    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Meus livros favoritos </h1>
                </body>
            </html>
        `
    )

    
})