const express = require('express');

const router = express.Router();

const defaultController = require('../controllers/default-controller')


router.get('/', defaultController.indexPage);

router.post('/watch', defaultController.watched);


module.exports = router;