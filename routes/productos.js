import { Router } from 'express';
const router = Router(); 

import { productosGet, productosPost, productosPut, productosDelete, productosGetOne } from '../controllers/producto__.js'; // Importa los controladores desde el archivo '../controllers/usuario'


router.get('/', productosGet).get('/:id', productosGetOne).post('/', productosPost).put('/:id', productosPut).delete('/:id', productosDelete);

export default router;

