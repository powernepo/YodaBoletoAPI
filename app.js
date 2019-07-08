require('dotenv').config();

const app = require('./src/serve');

app.listen(process.env.PORT);