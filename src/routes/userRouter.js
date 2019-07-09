const userController = require('../controller/user');

module.exports = (router) => {
    router.post('/novo', userController.novo);
    router.get('/perfil', userController.perfil);
    router.put('/update', userController.atualizar);
}