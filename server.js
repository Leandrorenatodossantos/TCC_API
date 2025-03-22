require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importando rotas
const contratoRoutes = require('./routes/cadastro_contrato');
const usuariosRoutes = require('./routes/usuarios');
const cadastroServicoRoutes = require('./routes/cadastro_servico');
const cadastroEquipeRoutes = require('./routes/cadastro_equipe');
const cadastroGrupoRoutes = require('./routes/cadastro_grupo');
const cadastroReajusteRoutes = require('./routes/cadastro_reajuste');
const movimentoCadernetaRoutes = require('./routes/movimento_caderneta');
const cadastroMunicipioRoutes = require('./routes/cadastro_municipio');
const cadastroContratoRoutes = require('./routes/cadastro_contrato');

// Definindo rotas
app.use('/contrato', contratoRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/cadastro_servico', cadastroServicoRoutes);
app.use('/cadastro_equipe', cadastroEquipeRoutes);
app.use('/cadastro_grupo', cadastroGrupoRoutes);
app.use('/cadastro_reajuste', cadastroReajusteRoutes);
app.use('/movimento_caderneta', movimentoCadernetaRoutes);
app.use('/cadastro_municipio', cadastroMunicipioRoutes);
app.use('/cadastro_contrato', cadastroContratoRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
