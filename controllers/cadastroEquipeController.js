const db = require('../config/database');

exports.getEquipes = (req, res) => {
    db.query('SELECT * FROM cadastro_equipe', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

exports.createEquipe = (req, res) => {
    const { Equipe, Descricao, Lider } = req.body;
    db.query(
        'INSERT INTO cadastro_equipe (Equipe, `Descrição`, `Líder`) VALUES (?, ?, ?)',
        [Equipe, Descricao, Lider],
        (err, result) => {
            if (err) res.status(500).json({ error: err });
            else res.json({ message: 'Equipe cadastrada com sucesso!' });
        }
    );
};

exports.updateEquipe = (req, res) => {
    const { id } = req.params;
    const { Equipe, Descricao, Lider } = req.body;
    db.query(
        'UPDATE cadastro_equipe SET Equipe = ?, `Descrição` = ?, `Líder` = ? WHERE id_equipe = ?',
        [Equipe, Descricao, Lider, id],
        (err, result) => {
            if (err) res.status(500).json({ error: err });
            else res.json({ message: 'Equipe atualizada com sucesso!' });
        }
    );
};

exports.deleteEquipe = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM cadastro_equipe WHERE id_equipe = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Equipe deletada com sucesso!' });
    });
};