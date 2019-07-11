const user = require('../models/user');
const encript = require('../helpers/encrypt');

module.exports = {
    async store(req, res) {
        try {
            const { usuario, nome, sobrenome, email, senha } = req.body;
            const hash = await encript.createHash(senha);
            await user.store([usuario, nome, sobrenome, email, hash]);
            res.success("Usuario salvo com sucesso !");
        } catch (error) {
            res.error(error);
        }
    },
    async get(req, res) {
        try {
            const { usuario } = req.params;
            const localUser = await user.get([usuario]);
            res.success(localUser);
        } catch (error) {
            res.error(error);
        }
    },
    async update(req, res) {
        try {
            const { codigo, usuario, nome, sobrenome, email, senha } = req.body;
            const hash = await encript.createHash(senha);
            await user.update([usuario, nome, sobrenome, email, hash, codigo]);
            res.success("Update feito com sucesso !");
        } catch (error) {
            res.error(error);
        }
    },
    async delete(req, res) {
        res.error("NOT YET");
    }
}