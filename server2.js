import { createServer } from 'http'

const users = [ 
    { id: 1, name: 'Benjamin frankwell' }, 
    { id: 2, name: 'phillip wells' }, 
    { id: 3, name: 'thomans haggi' }
]

const server = createServer((req, res) => {
    console.log(req.url === '/api/users')
    console.log(req.method === 'GET')
    if(req.url = '/api/users' && req.method === 'GET'){ 
        res.setHeader('Content-Type', 'application/json' )
        res.write(JSON.stringify(users))
        res.end()
    }else{
        res.setHeader('Content-Type','application/json' )
        res.statusCode = 404
        res.write(JSON.stringify({ message: 'Route not found' }))
        res.end()
    }
})

const PORT = 2000 
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})