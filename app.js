require('dotenv').config();

const app = require('./src/serve');

app.listen(process.env.PORT, '0.0.0.0');