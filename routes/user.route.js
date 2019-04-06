var express = require('express');
var controller = require('../controller/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();

router.get('/',controller.index);

router.get('/search',controller.search);

router.get('/createuser', controller.createuser);

router.get('/:id', controller.getforid); 

router.post('/createuser', validate.postCreate, controller.postcreateuser);


module.exports = router;