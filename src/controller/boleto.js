const boleto = require('../models/boleto');

module.exports = {
    async store(req, res) {
        try {
            res.success("BOLETO SUCESSO");
        } catch (error) {
            res.error(error);
        }
    },
    async get(req, res) {
        try {
            res.success("BOLETO SUCESSO");
        } catch (error) {
            res.error(error);
        }
    },
    async update(req, res) {
        try {
            res.success("BOLETO SUCESSO !");
        } catch (error) {
            res.error(error);
        }
    },
    async delete(req, res) {
        res.success("BOLETO SUCESSO !");
    }
}