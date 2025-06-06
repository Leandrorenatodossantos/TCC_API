const db = require('../config/database');

exports.getUsuarios = (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

exports.createUsuario = (req, res) => {
    const { nome, email, senha } = req.body;
    db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', 
        [nome, email, senha], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Usuário criado com sucesso!' });
    });
};

exports.updateUsuario = (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    db.query('UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?', 
        [nome, email, senha, id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Usuário atualizado com sucesso!' });
    });
};

exports.deleteUsuario = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Usuário deletado com sucesso!' });
    });
};
