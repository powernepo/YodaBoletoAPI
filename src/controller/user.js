const user = require('../models/user')

module.exports = {
    async novo(req, res) {
        const { usuario, nome, sobrenome, email, senha } = req.body;
        const res = await user.store([usuario, nome, sobrenome, email, senha]);
    },
    perfil(req, res) {

    },
    atualizar(req, res) {

    }
}