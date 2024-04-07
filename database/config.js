import mongoose from 'mongoose'
import dotenv from 'dotenv'// Importa la librería mongoose para interactuar con MongoDB
dotenv.config()
mongoose.connect(process.env.MONGODB_CNN).then(()=>console.log('Conectado a mongo atlas')).catch(e=>console.error(e))