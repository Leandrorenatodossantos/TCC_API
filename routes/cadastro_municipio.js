const express = require('express');
const router = express.Router();
const cadastroMunicipioController = require('../controllers/cadastroMunicipioController');

router.get('/', cadastroMunicipioController.getMunicipios);
router.post('/', cadastroMunicipioController.createMunicipio);
router.put('/:id', cadastroMunicipioController.updateMunicipio);
router.delete('/:id', cadastroMunicipioController.deleteMunicipio);

module.exports = router;  // ✅ Deve ser apenas "router", sem chaves {}
