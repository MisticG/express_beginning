const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
res.send('Hello World')
})

app.get('/todo', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))