const express = require('express');
const router = express.Router();
const cadastroServicoController = require('../controllers/cadastroServicoController'); // Verifique o caminho!

router.get('/', cadastroServicoController.getServicos);
router.post('/', cadastroServicoController.createServico);
router.put('/:id', cadastroServicoController.updateServico);
router.delete('/:id', cadastroServicoController.deleteServico);

module.exports = router;
