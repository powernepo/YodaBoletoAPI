const user = require('../models/user')

module.exports = {
    async novo(req,res){
        const u = [req.body.usuario,
                   req.body.nome,
                   req.body.sobrenome,
                   req.body.email,
                   req.body.senha]

         user.toRegister(u)
            .then(()=>{
                return res.status(200).send(
                    { "STATUS ": 'Usuário criado com sucesso' })
            })
            .catch(()=>{
                return res.status(401).send(
                    { "STATUS ": 'Ocorreu algum problema' })
            })
    },
    async perfil(req,res){
         user.informations()
            .then()
            .catch()
    },
    async atualizar(req,res){
         user.toUpdate()
            .then()
            .catch()
    }
}