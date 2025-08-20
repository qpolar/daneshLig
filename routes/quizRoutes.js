const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/:id', quizController.getQuizById);
router.post('/', quizController.createQuizSearch);

module.exports = router;
