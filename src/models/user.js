const basequery = require('../database/basequery')

module.exports = {
    store(user = []) {
        return basequery("INSERT INTO usuario(usuario, nome, sobrenome, email, senha) VALUE (?,?,?,?,?)", user);
    },
    get(usuario = []) {
        return basequery("SELECT * FROM usuario WHERE usuario = ?", usuario);
    },
    update(user = []) {
        return basequery("UPDATE usuario SET usuario = ?, nome = ?, sobrenome = ?, email = ?, senha = ? WHERE codigo = ?", user);
    },
    delete(codigo = []) {
        return basequery("DELETE FROM usuario WHERE codigo = ?", codigo);
    },
    findByUser(user = []) {
        return basequery("SELECT * FROM usuario AS u WHERE u.usuario = ?", user);
    }
}