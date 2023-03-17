const express = require('express')
// taking the express folder and dumping it in this const.

const routes = require('./routes')

const app = express()
// initialize the express.
app.use(express.json())
// declare to express to use JSON.

app.use(routes)

const PORT = 3333
// the port that is for listening.

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
// listen on this PORT, and execute this arrow function when you find the port.
