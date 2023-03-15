const express = require('express')
// taking the express folder and dumping it in this const.

const app = express()
// initialize the express.


app.post('/users', (request, response) => {

  response.send("Você chamou o POST.")
})

const PORT = 3333
// the port that is for listening.

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
// listen on this PORT, and execute this arrow function when you find the port.
