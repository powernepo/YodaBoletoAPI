const user = require('../models/user')

module.exports = {
    async novo(req, res) {
        const { usuario, nome, sobrenome, email, senha } = req.body;
        try {
            const result = await user.store([usuario, nome, sobrenome, email, senha]);

            res.status(200).send("SUCESSO");

        } catch (error) {
            res.status(404).send(error);
        };
    },
    perfil(req, res) {
        res.send("perfil");
    },
    atualizar(req, res) {

    }
}