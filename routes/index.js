import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaCoches, 
    paginaTestimoniales, 
    paginaDetalleCoches 
} from '../controllers/paginasController.js';

import { guardarTestimonial } from '../controllers/testimonialesController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/coches', paginaCoches);

router.get('/coches/:slug', paginaDetalleCoches);

router.get('/testimoniales', paginaTestimoniales);


// Cuando relleno el form
router.post('/testimoniales', guardarTestimonial);


export default router;