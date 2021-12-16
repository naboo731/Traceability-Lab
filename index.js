const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public'))
})
// app.use('/',express.static(path.join(__dirname, 'public')))













const port = process.env.PORT || 4545
app.listen(port, () => {
    console.log(`Are you there dad? On port ${port}`)
})