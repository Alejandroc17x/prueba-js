const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/capturar-datos', (req, res) => {
    const { username, password } = req.body;
    console.log(`Usuario: ${username}, Contraseña: ${password}`);

    // Aquí puedes almacenar los datos en una base de datos o en un archivo
    res.json({ message: 'Datos recibidos' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
