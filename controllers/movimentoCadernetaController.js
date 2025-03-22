const db = require('../config/database');

// Buscar todos os movimentos com JOINs legíveis
exports.getMovimentos = (req, res) => {
    const query = `
    SELECT mc.*, 
        cc.codigo_contrato,
        ce.Equipe AS nome_equipe,
        cm.nome AS nome_municipio,
        cs.descricao_servico,
        cg.Grupo AS nome_grupo
    FROM movimento_caderneta mc
    JOIN cadastro_contrato cc ON mc.contrato = cc.id
    JOIN Cadastro_Equipe ce ON mc.equipe = ce.id_equipe
    JOIN Cadastro_Municipio cm ON mc.municipio = cm.id
    JOIN Cadastro_Servico cs ON mc.descricao_servico = cs.id
    JOIN Cadastro_Grupo cg ON mc.grupo = cg.id
`;

    db.query(query, (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

// Criar novo movimento
exports.createMovimento = (req, res) => {
    const {
        contrato, data_execucao, equipe, trecho, rodovia, municipio, descricao_servico,
        grupo, lado, unidade_extencao, estaca_inicial, fracao_inicial, estaca_km_final,
        comprimento, largura, espessura, area, volume, densidade, teor, taxa,
        quantidade, unidade_medida, usina, preco_unitario_PI, preco_unitario_pi_R
    } = req.body;

    const query = `
        INSERT INTO movimento_caderneta (
            contrato, data_execucao, equipe, trecho, rodovia, municipio, descricao_servico,
            grupo, lado, unidade_extencao, estaca_inicial, fracao_inicial, estaca_km_final,
            comprimento, largura, espessura, area, volume, densidade, teor, taxa,
            quantidade, unidade_medida, usina, preco_unitario_PI, preco_unitario_pi_R
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [
        contrato, data_execucao, equipe, trecho, rodovia, municipio, descricao_servico,
        grupo, lado, unidade_extencao, estaca_inicial, fracao_inicial, estaca_km_final,
        comprimento, largura, espessura, area, volume, densidade, teor, taxa,
        quantidade, unidade_medida, usina, preco_unitario_PI, preco_unitario_pi_R
    ], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Movimento cadastrado com sucesso!' });
    });
};

// Atualizar movimento existente
exports.updateMovimento = (req, res) => {
    const { id } = req.params;
    const {
        contrato, data_execucao, equipe, trecho, rodovia, municipio, descricao_servico,
        grupo, lado, unidade_extencao, estaca_inicial, fracao_inicial, estaca_km_final,
        comprimento, largura, espessura, area, volume, densidade, teor, taxa,
        quantidade, unidade_medida, usina, preco_unitario_PI, preco_unitario_pi_R
    } = req.body;

    const query = `
        UPDATE movimento_caderneta SET
            contrato = ?, data_execucao = ?, equipe = ?, trecho = ?, rodovia = ?, municipio = ?, descricao_servico = ?,
            grupo = ?, lado = ?, unidade_extencao = ?, estaca_inicial = ?, fracao_inicial = ?, estaca_km_final = ?,
            comprimento = ?, largura = ?, espessura = ?, area = ?, volume = ?, densidade = ?, teor = ?, taxa = ?,
            quantidade = ?, unidade_medida = ?, usina = ?, preco_unitario_PI = ?, preco_unitario_pi_R = ?
        WHERE id = ?
    `;

    db.query(query, [
        contrato, data_execucao, equipe, trecho, rodovia, municipio, descricao_servico,
        grupo, lado, unidade_extencao, estaca_inicial, fracao_inicial, estaca_km_final,
        comprimento, largura, espessura, area, volume, densidade, teor, taxa,
        quantidade, unidade_medida, usina, preco_unitario_PI, preco_unitario_pi_R,
        id
    ], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Movimento atualizado com sucesso!' });
    });
};

// Deletar movimento
exports.deleteMovimento = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM movimento_caderneta WHERE id = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Movimento deletado com sucesso!' });
    });
};
