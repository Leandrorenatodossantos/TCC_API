const express = require('express');
const router = express.Router();
const movimentoCadernetaController = require('../controllers/movimentoCadernetaController');

router.get('/', movimentoCadernetaController.getMovimentos);
router.post('/', movimentoCadernetaController.createMovimento);
router.put('/:id', movimentoCadernetaController.updateMovimento);
router.delete('/:id', movimentoCadernetaController.deleteMovimento);

module.exports = router;