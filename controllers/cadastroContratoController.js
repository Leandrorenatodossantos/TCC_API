const db = require('../config/database');

exports.getContratos = (req, res) => {
    db.query('SELECT * FROM cadastro_contrato', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

exports.createContrato = (req, res) => {
    const { codigo_contrato, descricao_contrato } = req.body;
    db.query('INSERT INTO cadastro_contrato (codigo_contrato, descricao_contrato) VALUES (?, ?)',
        [codigo_contrato, descricao_contrato],
        (err, result) => {
            if (err) res.status(500).json({ error: err });
            else res.json({ message: 'Contrato cadastrado com sucesso!' });
        });
};

exports.updateContrato = (req, res) => {
    const { id } = req.params;
    const { codigo_contrato, descricao_contrato } = req.body;
    db.query('UPDATE cadastro_contrato SET codigo_contrato = ?, descricao_contrato = ? WHERE id = ?',
        [codigo_contrato, descricao_contrato, id],
        (err, result) => {
            if (err) res.status(500).json({ error: err });
            else res.json({ message: 'Contrato atualizado com sucesso!' });
        });
};

exports.deleteContrato = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM cadastro_contrato WHERE id = ?', [id],
        (err, result) => {
            if (err) res.status(500).json({ error: err });
            else res.json({ message: 'Contrato deletado com sucesso!' });
        });
};
