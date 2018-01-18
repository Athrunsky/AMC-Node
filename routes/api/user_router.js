const router = require('koa-router')();
const user_controller = require('../../app/controllers/user_controller');

router.get('/getUser', user_controller.getUser);
router.post('/registerUser', user_controller.registerUser);
router.get('/testUser', user_controller.testUser);
router.get('/postUser', user_controller.postUser);

module.exports = router;