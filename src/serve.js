const express = require('express');
const userRouter = express.Router();
const someRouter = express.Router();

const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

require('./routes/userRouter')(userRouter);
require('./routes/someRoutes')(someRouter);


app.use('/usuario', userRouter);
app.use('/', someRouter);






module.exports = app;