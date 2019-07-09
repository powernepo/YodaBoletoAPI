const user = require('../models/user');
const encript = require('../helpers/encrypt');

module.exports = {
    async store(req, res) {
        try {

            const { usuario, nome, sobrenome, email, senha } = req.body;
            const hash = await encript.createHash(senha);
            await user.store([usuario, nome, sobrenome, email, hash]);
            res.success("O usuário foi inserido com sucesso !");
        } catch (error) {
            res.error(error);
        }
    },
    async get(req, res) {
        try {
            const { id } = req.params
            res.send(await user.findById([id]));
        } catch (error) {
            res.status(404).send(error);
        }
    },
    async update(req, res) {

    },
    async delete(req, res) {

    }
}