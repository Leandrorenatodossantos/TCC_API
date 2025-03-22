const express = require('express');
const router = express.Router();
const cadastroReajusteController = require('../controllers/cadastroReajusteController');

router.get('/', cadastroReajusteController.getReajustes);
router.post('/', cadastroReajusteController.createReajuste);
router.put('/:id', cadastroReajusteController.updateReajuste);
router.delete('/:id', cadastroReajusteController.deleteReajuste);

module.exports = router;