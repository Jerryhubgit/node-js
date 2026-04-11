import http from 'http'
import path from 'path'
import fs from 'fs/promises'
import url from 'url'


const server = http.createServer(async (req, res) => {
    const __filename =  url.fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    let filePath;
    if(req.method === 'GET'){
        if(req.url === '/'){
            filePath = path.join(__dirname, 'public', 'index.html')
        }else if(req.url === '/about'){
            filePath = path.join(__dirname, 'public', 'static.html')
        }else{
            console.log('not a valid route')
        }

        let data = await fs.readFile(filePath)
        res.end(data)
    }else{
        res.writeHead(500, { 'Content-Type': 'text/plain'})
        res.setHeader({ 'Content-Type': 'text/html' })
        res.end('Server Error')
    }
    
})

const PORT  = process.env.PORT
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})