
const db = require('../config/database');

exports.getReajustes = (req, res) => {
    db.query('SELECT * FROM cadastro_reajuste', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

exports.createReajuste = (req, res) => {
    const { Data_reajuste, Grupo } = req.body;
    db.query('INSERT INTO cadastro_reajuste (Data_reajuste, Grupo) VALUES (?, ?)', 
        [Data_reajuste, Grupo], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Reajuste cadastrado com sucesso!' });
    });
};

exports.updateReajuste = (req, res) => {
    const { id } = req.params;
    const { Data_reajuste, Grupo } = req.body;
    db.query('UPDATE cadastro_reajuste SET Data_reajuste = ?, Grupo = ? WHERE id = ?', 
        [Data_reajuste, Grupo, id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Reajuste atualizado com sucesso!' });
    });
};

exports.deleteReajuste = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM cadastro_reajuste WHERE id = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Reajuste deletado com sucesso!' });
    });
};
