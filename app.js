import express from 'express';
import productosRouter from './routes/productos.js';
import './database/config.js'
import cors from "cors"
const port = 3000;
const app = express();
app.use(express.json());
const whitelist = ['http://localhost:3000']; // assuming front-end application is running on localhost port 3000

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
app.use('/api/v1', productosRouter)
app.get('/', (req, res) => {
    res.redirect('/api/v1/');
})
app.listen(port, () => {
    console.log('API RUNNING ON PORT 3000 🚀 YOU CAN SEE THE ROUTES IN localhost:3000/api/v1/productos')
})

