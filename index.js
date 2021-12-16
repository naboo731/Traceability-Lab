const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '29bf237c55d9463d8f06c1fad316bb88',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
app.use(express.json())

app.use('/',express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html loaded successfully')
})


app.post('/api/name', (req, res) => {
    let {name} = req.body
  
    rollbar.log('color added successfully', {author: 'Nicki', type: 'manual entry'})
    res.status(200).send(name)
})

app.post('/api/birthday', (req, res) => {
    let {birthday} = req.body

    rollbar.log('color added successfully', {author: 'Nicki', type: 'manual entry'})
    res.status(200).send(birthday)
})

app.post('/api/color', (req, res) => {
    let {color} = req.body
    colorArray.push(color)

    rollbar.log('color added successfully', {author: 'Nicki', type: 'manual entry'})
    res.status(200).send(color)
})

app.post('/api/funfact', (req, res) => {
    let {funFact} = req.body
    colorArray.push(color)

    rollbar.log('color added successfully', {author: 'Nicki', type: 'manual entry'})
    res.status(200).send(funFact)
})




app.use(rollbar.errorHandler)

const port = process.env.PORT || 4573

app.listen(port, () => {
    console.log(`Are you there dad? On port ${port}`)
})