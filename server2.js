import  { createServer } from 'http'


const users = [
    { id: 1, name: 'James ibori' }, 
    { id: 2, name: 'Philip morgan' }, 
    { id: 3, name: 'Benjamin franklin' }
]

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(users))
    res.end()
})

const PORT = 2000; 
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})