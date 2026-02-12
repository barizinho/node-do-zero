// import { createServer } from 'node:http';

// const server = createServer((request, response) => {
//     response.write('Servior rodando na porta 3333!')
    
//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', async () => {
    return "Servidor rodando na porta 3333!"
})

server.listen({
    port: 3333,
}).then (() => {
    console.log("Servidor rodando em localhost:3333")
}).catch(err => {
    console.error(err)
    process.exit(1)
})