const user = require('../models/user');
const encript = require('../helpers/encrypt');

module.exports = {
    async novo(req, res) {
        try {

            const { usuario, nome, sobrenome, email, senha } = req.body;
            const hash = await encript.createHash(senha);
            await user.store([usuario, nome, sobrenome, email, hash]);
            res.success("O usuário foi inserido com sucesso !");
        } catch (error) {
            res.someError(error);
        }
    },
    async perfil(req, res) {
        try {
            const { id } = req.params
            res.send(await user.findById([id]));
        } catch (error) {
            res.status(404).send(error);
        }
    },

    atualizar(req, res) {

    }
}