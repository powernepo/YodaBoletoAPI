const basequery = require('../database/basequery')

module.exports = {
    store(user) {
        return basequery("INSERT INTO usuario(usuario, nome, sobrenome,email,senha)" +
            "VALUE (?,?,?,?,?)", user);
    },
    delete(codigo) {
        return basequery("DELETE FROM permissao WHERE codigo = ?", codigo);
    },
    update(user) {
        return basequery("UPDATE usuario SET usuario = ?, nome = ? " +
            " sobrenome = ?, email = ?, senha = ? ", user);
    },
    find(codigo) {
        return basequery("SELECT * FROM usuario WHERE codigo = ?", codigo);
    },
    findBy(user) {
        return basequery("SELECT * FROM usuario" +
            " WHERE usuario = ? ,nome = ? ,sobrenome = ? ,email = ?", user);

    }
}