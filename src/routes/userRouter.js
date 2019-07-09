const userController = require('../controller/user');

module.exports = (router) => {
    router.post('/store', userController.store);
    router.get('/get', userController.get);
    router.put('/update', userController.update);
    router.put('/delete', userController.delete)
}