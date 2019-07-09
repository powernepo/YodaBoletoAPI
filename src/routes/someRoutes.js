const path = require('path');

module.exports = (router) => {

    router.get('/', (req, res) => {
        res.redirect('/inicio');
    });

    router.get('/inicio', (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../public/index.html`))
    });

    router.use((req, res) => {
        res.status(404).sendFile(path.resolve(`${__dirname}/../public/error404.html`));
    });
}