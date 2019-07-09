const express = require('express');
const router = express.Router();

const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(express.json());


require('./routes/userRouter')(router);

app.use("/usuario", (req, res, next) => {
    if (true) //logged
    {
        console.log("Usuário logado !");
        next();
    } else
        res.redirect("/");
});

app.use('/usuario', router);

require('./routes/someRoutes')(router);
app.use('/', router);

module.exports = app;