const db = require('../config/database');

exports.getReajustes = (req, res) => {
    db.query('SELECT * FROM Cadastro_Reajuste', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

exports.createReajuste = (req, res) => {
    const { Data_reajuste, Grupo } = req.body;
    db.query('INSERT INTO Cadastro_Reajuste (Data_reajuste, Grupo) VALUES (?, ?)', 
        [Data_reajuste, Grupo], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Reajuste cadastrado com sucesso!' });
    });
};

exports.updateReajuste = (req, res) => {
    const { id } = req.params;
    const { Data_reajuste, Grupo } = req.body;
    db.query('UPDATE Cadastro_Reajuste SET Data_reajuste = ?, Grupo = ? WHERE id = ?', 
        [Data_reajuste, Grupo, id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Reajuste atualizado com sucesso!' });
    });
};

exports.deleteReajuste = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Cadastro_Reajuste WHERE id = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Reajuste deletado com sucesso!' });
    });
};