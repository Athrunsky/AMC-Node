const router = require('koa-router')();
const user_router = require('./user_router');
const projectmenu_router = require('./projectmenu_router');

router.use('/users', user_router.routes(), user_router.allowedMethods());
router.use('/projectmenu', projectmenu_router.routes(), projectmenu_router.allowedMethods());


module.exports = router;