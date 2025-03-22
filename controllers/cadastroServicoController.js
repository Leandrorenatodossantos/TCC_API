const db = require('../config/database');

exports.getServicos = (req, res) => {
    db.query('SELECT * FROM cadastro_servico', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

exports.createServico = (req, res) => {
    const { contrato_id, codigo_servico, descricao_servico } = req.body;
    db.query('INSERT INTO cadastro_servico (contrato_id, codigo_servico, descricao_servico) VALUES (?, ?, ?)', 
        [contrato_id, codigo_servico, descricao_servico], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Serviço cadastrado com sucesso!' });
    });
};

exports.updateServico = (req, res) => {
    const { id } = req.params;
    const { contrato_id, codigo_servico, descricao_servico } = req.body;
    db.query('UPDATE cadastro_servico SET contrato_id = ?, codigo_servico = ?, descricao_servico = ? WHERE id = ?', 
        [contrato_id, codigo_servico, descricao_servico, id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Serviço atualizado com sucesso!' });
    });
};

exports.deleteServico = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM cadastro_servico WHERE id = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Serviço deletado com sucesso!' });
    });
};
