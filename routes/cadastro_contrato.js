const express = require('express');
const router = express.Router();
const cadastroContratoController = require('../controllers/cadastroContratoController');

router.get('/', cadastroContratoController.getContratos);
router.post('/', cadastroContratoController.createContrato);
//router.put('/:id', cadastroContratoController.updateContrato);
router.put('/codigo/:codigo_contrato', cadastroContratoController.updateContrato);
router.delete('/:id', cadastroContratoController.deleteContrato);

module.exports = router;