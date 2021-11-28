const Router = require('express');
const router = new Router();

router.post('/registration');
router.post('/login');
router.get('/auth'); //Проверяем авторизован пользователь или нет будет делаться по JWT token

module.exports = router;
