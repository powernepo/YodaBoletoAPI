const basequery = require('../database/basequery');

module.exports = {
    store(boleto = []) {
        return basequery("INSERT INTO boleto (nome, valor, vencimento, emissao, id_usuario, caminho) VALUE (?, ?, ?, ?, ?, ?)", boleto);
    },
    get(boletoId = []) {
        return basequery("SELECT * FROM boleto AS b WHERE b.codigo = ?", id)
    },
    update(boleto = []) {
        return basequery("UPDATE boleto SET nome = ?, valor = ?, vencimento = ?, emissao = ?, id_usuario = ?, caminho = ? WHERE codigo = ?", boleto);
    },
    delete(boletoId = []) {
        return basequery("DELETE FROM boleto WHERE codigo = ?", boletoId);
    },
    findAllByUserId(userId = []) {
        return basequery("SELECT * FROM boleto AS b WHERE b.id_usuario = ?", id);
    },

}