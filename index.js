const express = require('express')
const scores = require('./scores')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { scores })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(9999, () => {
  // Already using 1337 for other project
  console.log('PORT 9999 is here for you and willing to listen...') // eslint-disable-line no-console
})
