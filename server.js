// import { createServer } from 'node:http';

// const server = createServer((request, response) => {
//     response.write('Servior rodando na porta 3333!')
    
//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return "Servidor rodando na porta 3333!"
})

server.listen({
    port: 3333,
})