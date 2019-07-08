const Express = require('express');
const app = Express();

let path = './public/index.html'

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req,res) => {
    res.render('index.html')
})

  module.exports = app