import express from 'express';
import productosRouter from './routes/productos.js';
import './database/config.js'
const port = 3000;
const app = express();
app.use(express.json());
app.use('/api/v1', productosRouter)
app.listen(port, () => {
    console.log('API RUNNING ON PORT 3000 🚀 YOU CAN SEE THE ROUTES IN localhost:3000/api/v1/productos')
})