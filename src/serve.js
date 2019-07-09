const express = require('express');
const router = express.Router();

const app = express();
const { verifyUserLogin } = require('./middleware/middleware');

app.use(express.static(`${__dirname}/public`));
app.use(express.json());



require('./routes/userRouter')(router);
app.use('/usuario', verifyUserLogin, router);

require('./routes/someRoutes')(router);
app.use('/', router);

module.exports = app;