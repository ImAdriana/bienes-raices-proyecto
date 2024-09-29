import express from 'express';
const router = express.Router();
import {
    mostrarNosotros,
    mostrarInicio,
    mostrarTestimoniales,
    mostrarViajes,
    paginaDetalleViaje,
} from '../controllers/usuarioControlador.js';

router.get('/', mostrarInicio);
router.get('/nosotros', mostrarNosotros);
router.get('/testimoniales', mostrarTestimoniales);
router.get('/viajes', mostrarViajes);
router.get('/viajes/:destino', paginaDetalleViaje); //:destino es un comodin

export default router;
