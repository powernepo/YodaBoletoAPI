const userController = require('../controller/user');

module.exports = (router) => {
    router.post('/store', userController.store);
    router.get('/get/:usuario', userController.get);
    router.put('/update', userController.update);
    router.delete('/delete/:codigo', userController.delete);
}