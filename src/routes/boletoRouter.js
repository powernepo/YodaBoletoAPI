const boletoRouter = require('../controller/boleto');

module.exports = (router) => {
    router.post('/store', boletoRouter.store);
    router.get('/get', boletoRouter.get);
    router.put('/update', boletoRouter.update);
    router.delete('/delete', boletoRouter.delete);
}