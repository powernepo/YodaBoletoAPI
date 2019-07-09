const basequery = require('../database/basequery');

module.exports = {
    store(boleto = []) {
        return basequery("INSERT INTO boleto (nome, valor, vencimento, emissao, id_usuario, caminho) VALUE (?, ?, ?, ?, ?, ?)", boleto);
    },
    update(boleto = []) {
        return basequery("UPDATE boleto SET nome = ?, valor = ?, vencimento = ?, emissao = ?, id_usuario = ?, caminho = ? WHERE codigo = ?", boleto);
    },
    findAllByUserId(userId = []) {
        return basequery("SELECT * FROM boleto AS b WHERE b.id_usuario = ?", id);
    },
    findById(boletoId = []) {
        return basequery("SELECT * FROM boleto AS b WHERE b.codigo = ?", id)
    },
    delete(boletoId = []) {
        return basequery("DELETE FROM boleto WHERE codigo = ?", boletoId);
    }
}