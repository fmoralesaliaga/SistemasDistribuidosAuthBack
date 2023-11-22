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
    console.log(users.length);
    const id = users.length;
    const { name, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ id: id, name: name, username: username, password: hashedPassword });
    if (users.length == id + 1) {
      res.status(200).json({ message: 'Usuario registrado exitosamente' });
    } else {
      res.status(404).json({ message: 'Usuario no registrado' });
    }
  } catch (e) {
    res.status(404).json({ message: 'Usuario no registrado' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Servidor corriendo');
});
