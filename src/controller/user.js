const user = require('../models/user')
const bcrypt = require('bcryptjs')

function verificaSenha (reqPasw,hashDB){ //Não esta funfando
    bcrypt.compare(reqPasw,hashDB,(err, resut)=>{
        if(err) throw err
        else return resut > 1
    })
}
module.exports = {
    async novo(req, res) {
        const { usuario, nome, sobrenome, email, senha } = req.body;   
       
        try {
            bcrypt.hash(req.body.senha,10, async (err,hash)=>{
                console.log( verificaSenha(req.body.senha,hash))
                await user.store([usuario, nome, sobrenome, email, hash])
                    .catch(()=>{
                        res.status(401).send("USUÁRIO/EMAIL JÁ EXISTE");
                    })
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