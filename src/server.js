const express = require('express')
// taking the express folder and dumping it in this const.

const app = express()
// initialize the express.

app.get('/message/:id/:user', (request, response) => {
  const { id, user } = request.params

  response.send(`
    Message ID: ${id}. 
    To the user: ${user}.`
  ) 
})

app.get('/users', (request, response) => {
  const { page, limit } = request.query;

  response.send(`Page: ${page}. Show: ${limit}`)
})

const PORT = 3333
// the port that is for listening.

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
// listen on this PORT, and execute this arrow function when you find the port.
