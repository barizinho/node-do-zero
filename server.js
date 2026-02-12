import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const databese = new DatabaseMemory()

server.post('/videos', async (request, reply) => {
    const { title, description, duration } = request.body

    databese.create({
        title,
        description,
        duration,
    })
    
    return reply.status(201).send()
})

server.get('/videos', async () => {
    return "Servidor rodando na porta 3333!"
})

server.put('/videos/:id', async () => {
    return "Servidor rodando na porta 3333!"
})

server.delete('/videos/:id', async () => {
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
