import express from 'express';
import router from './routes/usuarioRoutes.js';
import db from './config/db.js';

const app = express();

// Conectar la bd
db.authenticate()
    .then(() => console.log('Bases de datos contectada'))
    .catch((error) => console.log(error));

// Habilitar pug
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware para obtener el año actual
app.use((req, res, next) => {
    const anio = new Date();
    res.locals.actualAnio = anio.getFullYear();
    res.locals.nombreSitio = 'Agencia viajes | ';
    return next();
});

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar router
app.use('/', router);
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Servidor correcto');
});
