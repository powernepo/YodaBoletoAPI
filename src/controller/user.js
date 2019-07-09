const user = require('../models/user');
const encript = require('../helpers/encrypt');

module.exports = {
    async novo(req, res) {
        const { usuario, nome, sobrenome, email, senha } = req.body;
        console.log("INIT HASH");
        const hash = await encript.createHash(senha);
        const isTrue = await encript.verifyHash(senha, hash);
        console.log(isTrue);
        res.send(hash);
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