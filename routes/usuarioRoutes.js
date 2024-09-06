import express from 'express';
const router = express.Router();
import {
    mostrarNosotros,
    mostrarInicio,
    mostrarTestimoniales,
    mostrarViajes,
} from '../controllers/usuarioControlador.js';

router.get('/', mostrarInicio);
router.get('/nosotros', mostrarNosotros);
router.get('/testimoniales', mostrarTestimoniales);
router.get('/viajes', mostrarViajes);

export default router;
