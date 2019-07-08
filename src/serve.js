const Express = require('express');
const app = Express();

app.use(Express.static(`${__dirname}/public`));
app.use(Express.json());
app.use( '/usuario', require('./router/routes'))

app.get('/', (req, res) => {
  if (true) {
    res.redirect('/inicio')
  }
})

app.get('/inicio', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

module.exports = app