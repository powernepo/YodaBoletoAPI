const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
  if (true) {
    res.redirect('/inicio')
  }
})

app.get('/inicio', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

module.exports = app