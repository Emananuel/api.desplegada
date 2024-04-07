import { Schema, model } from 'mongoose'; // Importa las funciones Schema y model de mongoose para definir esquemas y modelos de datos
// Define el esquema del modelo Usuario
const ProductoSchema = new Schema({
  id_producto: {
    type: Number,
    required: [true, 'El ID es obligatorio'] // Define que el campo nombre es obligatorio
  },
  nombre_producto: {
    type: String,
    required: [true, 'El Nombre es obligatorio'] // Define que el campo email es obligatorio
  },
  cantidad_total: {
    type: Number,
    required: [true, 'La cantidad total es obligatoria'], // Define que el campo password es obligatorio
    minlength: 1, // Define la longitud mínima del campo password
    maxlength: [200000, 'La cantidad total solo puedo tenr 200000 caracteres'] // Define la longitud máxima del campo password
  },
  cantidad_disponible: {
    type: Number,
    required: true, // Define que el campo rol es obligatorio
  },
  precio: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    minlength: 1, // Define la longitud mínima del campo password
    maxlength: [600, 'La descripción no puede pasar los 600 caracteres'] // Define la longitud máxima del campo password
  },
  imagen: {
    type: String,
  },
  id_categoria: {
    type: Number,

  }
});


// Crea y exporta el modelo Usuario a partir del esquema UsuarioSchema
export default model('Producto',ProductoSchema);
