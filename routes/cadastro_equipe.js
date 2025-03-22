const express = require('express');
const router = express.Router();
const cadastroEquipeController = require('../controllers/cadastroEquipeController');

router.get('/', cadastroEquipeController.getEquipes);
router.post('/', cadastroEquipeController.createEquipe);
router.put('/:id', cadastroEquipeController.updateEquipe);
router.delete('/:id', cadastroEquipeController.deleteEquipe);

module.exports = router;