const Koa = require('koa');
const app = new Koa();

let path = './public/index.html'

app.use('/home', ctx => {
    ctx.redict(path)
  });

  module.exports = app