const user = require('../models/user')
const bcrypt = require('bcryptjs')
module.exports = {
    async novo(req, res) {
        const { usuario, nome, sobrenome, email, senha } = req.body;   
        try {
            bcrypt.hash(req.body.senha,10, async (err,hash)=>{
                await user.store([usuario, nome, sobrenome, email, hash]);
                res.status(200).send("SUCESSO");
            })
        } catch (error) {
            res.status(404).send(error);
        };
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