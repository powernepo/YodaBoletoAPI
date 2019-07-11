const { verifyUserLogin } = require('./middleware/middleware');
const express = require('express');

const router = express.Router();
const app = express();

app.use(require('./middleware/resMiddleware')); // Algumas middlewares úteis !

app.use(express.static(`${__dirname}/public`));//Pasta publica
app.use(express.json());//Parser de JSON

require('./routes/userRouter')(router);//Rotas de usuário
app.use('/usuario', verifyUserLogin, router);//Path, middleware e rotas

require('./routes/boletoRouter')(router);//Rotas de boleto
app.use('/boleto', router);//Path e rotas

require('./routes/someRoutes')(router);//Rota principal
app.use('/', router);//Path da rota principal

module.exports = app;