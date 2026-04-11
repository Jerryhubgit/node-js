const express = require('express')
const app = express()

const names = ['benjamin', 'florence', 'hermit']

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

// app.use(logger)
// app.get('/', logger, (req, res) => {
//     res.render('engine', { messages: names.join(' ')})
// }) 

const usersRouter = require('./router/users')
app.use('/users', usersRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}



const PORT  = 4040
app.listen(PORT , () => {
    console.log(`Server listening http://localhost:${PORT}`)
})