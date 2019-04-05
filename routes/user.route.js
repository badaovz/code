var express = require('express');

var controller = require('../controller/user.controller');
var router = express.Router();

router.get('/',controller.index);

router.get('/search',controller.search);

router.get('/createuser', controller.createuser);

router.get('/:id', controller.getforid); 

router.post('/createuser', controller.postcreateuser);


module.exports = router;