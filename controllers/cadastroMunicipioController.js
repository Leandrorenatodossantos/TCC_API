const db = require('../config/database');

exports.getMunicipios = (req, res) => {
    db.query('SELECT * FROM cadastro_municipio', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

exports.createMunicipio = (req, res) => {
    const { nome } = req.body;
    db.query('INSERT INTO cadastro_municipio (nome) VALUES (?)', 
        [nome], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Município cadastrado com sucesso!' });
    });
};

exports.updateMunicipio = (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    db.query('UPDATE cadastro_municipio SET nome = ? WHERE id = ?', 
        [nome, id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Município atualizado com sucesso!' });
    });
};

exports.deleteMunicipio = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM cadastro_municipio WHERE id = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Município deletado com sucesso!' });
    });
};
