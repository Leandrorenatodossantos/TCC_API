const express = require('express');
const router = express.Router();
const cadastroGrupoController = require('../controllers/cadastroGrupoController');

router.get('/', cadastroGrupoController.getGrupos);
router.post('/', cadastroGrupoController.createGrupo);
router.put('/:id', cadastroGrupoController.updateGrupo);
router.delete('/:id', cadastroGrupoController.deleteGrupo);

module.exports = router;

