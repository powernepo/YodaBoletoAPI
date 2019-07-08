const basequery = require('../database/basequery')

module.exports = {
    async toRegister(user){ // O retorno vai ser uma promise, eu poderia usar o then(result=>{}) ou await basequery(...), que é como vamos fazer
        //Como segundo parametro do nosso basequery, devemos passar um array. Algo assim ["Doni", 18, "Inteligente"] que bata com as interrogações
        return await basequery("INSERT INTO usuario(usuario, nome, sobrenome,email,senha)" +
        "VALUE (?,?,?,?,?)", user);
    },
    async toDelete(codigo){
        return await basequery("DELETE FROM permissao WHERE codigo = ?", codigo);
    },
    async toUpdate(user){
        return await basequery("UPDATE usuario SET usuario = ?, nome = ? "+ 
        " sobrenome = ?, email = ?, senha = ? ", user);
    },
    async informations(codigo){
        return await basequery("SELECT * FROM usuario WHERE codigo = ?", codigo)
    },
    async searchCode(user){ 
        const code = await basequery("SELECT * FROM usuario" + 
        " WHERE usuario = ? ,nome = ? ,sobrenome = ? ,email = ?", user)
        return code
    }
}