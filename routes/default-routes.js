const express = require('express');

const router = express.Router();

const defaultController = require('../controllers/default-controller')


router.get('/', defaultController.indexPage);

router.get('/cadastrar', defaultController.allMovies)

router.post('/save', defaultController.insertMovies)

router.post('/watch', defaultController.watched);


module.exports = router;