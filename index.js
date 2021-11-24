const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const discography = require('./routes/discography');
const playlists = require('./routes/playlists');
/* const redesSociales = require('./routes/socialNetworks');
const videos = require('./routes/videos'); */

// crear el servidor
const app = express();

// conectar a la base de datos
connectDB();

// habilitar cors
app.use(cors());

// habilitar express.json
app.use(express.json({ extended: true }));

// puerto de la app
const port = process.env.port || 4000;

// importar rutas
app.use('/api/discography', discography);
app.use('/api/playlists', playlists);
/* app.use('/api/socialNetworks', socialNetworks);
app.use('/api/videos', videos); */

// arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`The server is working on port ${port}`);
});



