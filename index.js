const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '29bf237c55d9463d8f06c1fad316bb88',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
app.use(express.json())


rollbar.log('Hello world!')


app.use('/',express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html/css loaded successfully')
})

app.post('/api/color', (req, res) => {
    let {color} = req.body

    rollbar.log('color added successfully', {author: 'Nicki', type: 'manual entry'})
    res.status(200).send(color)
})





app.use(rollbar.errorHandler)

const port = process.env.PORT || 4545

app.listen(port, () => {
    console.log(`Are you there dad? On port ${port}`)
})