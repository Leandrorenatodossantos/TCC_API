const db = require('../config/database');

exports.getGrupos = (req, res) => {
    db.query('SELECT * FROM Cadastro_Grupo', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

exports.createGrupo = (req, res) => {
    const { Grupo, Descricao } = req.body;
    db.query('INSERT INTO Cadastro_Grupo (Grupo, Descricao) VALUES (?, ?)', 
        [Grupo, Descricao], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Grupo cadastrado com sucesso!' });
    });
};

exports.updateGrupo = (req, res) => {
    const { id } = req.params;
    const { Grupo, Descricao } = req.body;
    db.query('UPDATE Cadastro_Grupo SET Grupo = ?, Descricao = ? WHERE id = ?', 
        [Grupo, Descricao, id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Grupo atualizado com sucesso!' });
    });
};

exports.deleteGrupo = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Cadastro_Grupo WHERE id = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Grupo deletado com sucesso!' });
    });
};