const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let httpPort = process.env.HTTP_PORT || 3001

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello BlockBox!!')
})

app.listen(httpPort, () => console.log(`Listening http on port: ${httpPort}`))

module.exports = app