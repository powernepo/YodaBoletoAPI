const basequery = require('../database/basequery');

module.exports = {
    storeUser(user){ // O retorno vai ser uma promise, eu poderia usar o then(result=>{}) ou await basequery(...), que é como vamos fazer
        //Como segundo parametro do nosso basequery, devemos passar um array. Algo assim ["Doni", 18, "Inteligente"] que bata com as interrogações
        return basequery("INSERT INTO users(bla, bla, bla) VALUE (?,?,?)", user);
    }
}