import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://Emanuel474:calvo123@cluster0.koh1rzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log('Conectado a mongo atlas')).catch(e=>console.error(e))