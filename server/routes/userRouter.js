const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check); //Проверяем авторизован пользователь или нет будет делаться по JWT token

module.exports = router;
