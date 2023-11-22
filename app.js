const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('jsonwebtoken');

// Inicialización de Express
const app = express();
app.use(express.json());

users = [
  { id: 1, name: 'Felipe', username: 'felipe', password: 'contraseña' },
  { id: 2, name: 'Maria', username: 'maria', password: 'contraseña' },
];

app.get('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);

    if (user) {
    res.json(user);
    } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
    }
});

app.post('/user/', async (req, res) => {
    try {
        const { name, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
    }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor corriendo');
});
