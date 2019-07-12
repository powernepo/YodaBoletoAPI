const user = require('../models/user');
const encript = require('../helpers/encrypt');
const model = require('../models/user')
const jwt = require('jsonwebtoken')

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
    },
    // NÃO TESTEI SE ESTA LOGANDO E DEVOLVENDO O TOKEN CORRTAMENTE
    async login(req, res) {
        // Verificando se USUARIO EXISTE
        const { usuario, nome, sobrenome, email, senha } = req.body;
        model.findByUser(usuario)
            .then(user =>{
                if (encript.verifyHash(senha,user.senha)) {
                    // Coloque no ENV SECRET_KEY='secret'
                    // ESSE SECRET É A SENHA QUE ELE VAI USA PARA DESCRIPTOGRAFAR,
                    // COMO SE FOSSE UMA CHAVE PARA ELE
                    let token = jwt.sign(user.codigo,SECRET_KEY,{
                        expiresIn: 1440 // isso é o tempo que o TOKEN do usuário vai ser válido
                    })
                    console.log(user.nome + " esta logado ! " + new Date());
                    res.send(token) ;
                } else {
                    res.redirect("/");
                }
        })
        
    }
}