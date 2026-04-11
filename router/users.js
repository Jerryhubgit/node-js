const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(`<h1> view all users here</h1>`)
})

router.post('/', (req, res) => {
    const isValid = true; 
    if(isValid){
        
    }
    res.send('New user Created')
})
router.get('/new', (req, res) => {
    res.render('../views/new')
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`<h1> This is the with id: ${req.params.id} </h1>`)
    })
    .put((req, res) => {
        res.send('update a user with id:')
    })
    .delete((req, res) => {
        res.send('delete user with id')
    })

const users = [ { name: 'benjamin', name: 'kayode' }]
router.param('id', (req, res, next, userId) => {
    req.user = users[userId]
    next()
})



module.exports = router



