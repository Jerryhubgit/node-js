import { createServer } from 'http'


const users = [
    { id: 0,  name: 'James', color: 'red' }, 
    { id: 1, name: 'Benjamin', color: 'green' }
]

const server  = createServer((req, res) => {
    try{
        if(req.method === 'GET'){
            if(req.url === '/about'){
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end('<h1> About page </h1>')
            }else if(req.url.match(/\api\/users\/([0-9]+)/)){
                let id = req.url.split('/')[3]
                let user = users.find((user) => user.id === Number(id) )
                
                console.log(user)

                if(user) { 
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify(user))
                }else res.end('User doesn\'t exist' )


            }else{
                res.writeHead(404, { 'Content-Type': 'text/plain' })
                res.end('Not Found')
            }
        }

    }catch(err){
        throw new Error('Server Error')
    }
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})