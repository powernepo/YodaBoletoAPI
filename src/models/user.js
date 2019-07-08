const basequery = require('../database/basequery')

module.exports = {
    toRegister(user){ // O retorno vai ser uma promise, eu poderia usar o then(result=>{}) ou await basequery(...), que é como vamos fazer
        //Como segundo parametro do nosso basequery, devemos passar um array. Algo assim ["Doni", 18, "Inteligente"] que bata com as interrogações
        return basequery("INSERT INTO usuario(usuario, nome, sobrenome,email,senha)" +
        "VALUE (?,?,?,?,?)", user);
    },
    toDelete(codigo){
        return basequery("DELETE FROM permissao WHERE codigo = ?", codigo);
    },
    toUpdate(user){
        return basequery("UPDATE usuario SET usuario = ?, nome = ? "+ 
        " sobrenome = ?, email = ?, senha = ? ", user);
    },
    informations(codigo){
        return basequery("SELECT * FROM usuario WHERE codigo = ?", codigo)
    },
    searchCode(user){ 
        const code = await basequery("SELECT * FROM usuario" + 
        " WHERE usuario = ? ,nome = ? ,sobrenome = ? ,email = ?", user)
        return code
    }
}