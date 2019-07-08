const express = require('express')
const routes = express.Router()

const UserCONTROL =  require('../controller/user')

 routes.post('/novo',  UserCONTROL.novo)
 routes.get('/perfil', UserCONTROL.perfil)
 routes.put('/update', UserCONTROL.atualizar)

module.exports = routes