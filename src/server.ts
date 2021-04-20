import express, { request, response } from 'express'

const app = express()

/*
    GET = Buscas
    POST = Criação
    PUT = Alteração
    DELETE
    PATCH = Alterar uma informação especifica
*/

app.get('/', (request, response) => {
    return response.json({
        message: "Olá NLW 05"
    })
})

app.post('/', (request, response) => {
    return response.json({
        message: "Usuario criado com sucesso!"
    })
})
app.listen(3333, () => console.log('Servidor rodando na porta 3333'))