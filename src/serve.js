const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
})

module.exports = app