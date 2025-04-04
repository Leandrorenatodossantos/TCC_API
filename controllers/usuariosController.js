const db = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ✅ Buscar todos os usuários
exports.getUsuarios = (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) res.status(500).json({ error: err });
        else res.json(results);
    });
};

// ✅ Criar usuário com senha criptografada
exports.createUsuario = (req, res) => {
    const { nome, email, senha } = req.body;
    const hashedPassword = bcrypt.hashSync(senha, 10);

    db.query(
        'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
        [nome, email, hashedPassword],
        (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).json({ message: 'E-mail já cadastrado.' });
                } else {
                    res.status(500).json({ error: err });
                }
            } else {
                res.json({ message: 'Usuário criado com sucesso!' });
            }
        }
    );
};

// ✅ Atualizar usuário
exports.updateUsuario = (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const hashedPassword = bcrypt.hashSync(senha, 10);

    db.query(
        'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?',
        [nome, email, hashedPassword, id],
        (err, result) => {
            if (err) res.status(500).json({ error: err });
            else res.json({ message: 'Usuário atualizado com sucesso!' });
        }
    );
};

// ✅ Deletar usuário
exports.deleteUsuario = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
        if (err) res.status(500).json({ error: err });
        else res.json({ message: 'Usuário deletado com sucesso!' });
    });
};

// ✅ Login do usuário
exports.login = (req, res) => {
    const { email, senha } = req.body;
    console.log('Login recebido:', req.body);

    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        if (results.length === 0) {
            return res.status(401).json({ message: 'E-mail não encontrado.' });
        }

        const usuario = results[0];
        const senhaCorreta = bcrypt.compareSync(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json({ message: 'Senha incorreta.' });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            process.env.JWT_SECRET || 
            { expiresIn: '1d' }
        );

        res.json({
            token,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }
        });
    });
};