const db = require('../config/database');

exports.getEquipes = (req, res) => {
    db.query('SELECT * FROM Cadastro_Equipe', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

exports.createEquipe = (req, res) => {
    const { Equipe, Descricao, Lider } = req.body;
    db.query('INSERT INTO Cadastro_Equipe (Equipe, Descricao, Lider) VALUES (?, ?, ?)', 
        [Equipe, Descricao, Lider], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Equipe cadastrada com sucesso!' });
    });
};

exports.updateEquipe = (req, res) => {
    const { id } = req.params;
    const { Equipe, Descricao, Lider } = req.body;
    db.query('UPDATE Cadastro_Equipe SET Equipe = ?, Descricao = ?, Lider = ? WHERE id_equipe = ?', 
        [Equipe, Descricao, Lider, id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Equipe atualizada com sucesso!' });
    });
};

exports.deleteEquipe = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Cadastro_Equipe WHERE id_equipe = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Equipe deletada com sucesso!' });
    });
};
