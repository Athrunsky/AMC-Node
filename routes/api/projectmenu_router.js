const router = require('koa-router')();
const projectmenu_controller = require('../../app/controllers/projectmenu_controller');

router.get('/getProjectMenu', projectmenu_controller.serachProject);
router.post('/postProjectMenu', projectmenu_controller.postProject);

module.exports = router;