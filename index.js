const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const WilderController = require('./controllers/Wilders')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.set('debug', true)

mongoose
    .connect('mongodb://127.0.0.1:27017/wilderdb', {
        autoIndex: true,
    })
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error(err))

app.get('/', (req, res) => {
    res.send('Hello Word')
})

app.post('/api/wilder', WilderController.create)
app.get('/api/wilder', WilderController.retrieveAll)
app.get('/api/wilder/id', WilderController.retrieveOne)
app.put('/api/wilder', WilderController.update)
app.delete('/api/wilder', WilderController.delete)

app.listen(8000, () => {
    console.log('Server started on 8000')
})
