import { response } from 'express'; // Importa la función response desde el módulo express
import Producto from '../model/producto.js';
// Controlador para la solicitud GET a la ruta de usuarios
export const productosGet = async (req, res) => {
    const productoFinded = await Producto.find()
    res.status(200).json({
        msg: 'Status 200 - Ok',
        productos: productoFinded
    })
};
export const productosGetOne = async (req, res) => {
    const productoFinded = await Producto.findById(req.params.id)
    res.status(200).json({
        msg: 'Status 200 - Ok',
        producto: productoFinded
    })
};

// Controlador para la solicitud POST a la ruta de usuarios
export const productosPost = async (req, res) => {
    try {
        const productoCreated = new Producto(req.body)
        await productoCreated.save();
        res.status(200).json({
            msg: 'Status 200 - Ok',
            info: 'Producto creado correctamente',
            producto: productoCreated
        })
    } catch (e) {
        res.status(401).json({error: e})
    }
};

// Controlador para la solicitud PUT a la ruta de usuarios
export const productosPut = async (req, res) => {
    try {

        const { id } = req.params;
        const productoUpdated = await Producto.findByIdAndUpdate(id, req.body)
        res.json({
            msg: 'Producto actualizado con éxito',
            infoProducto: productoUpdated// Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con PUT
        });
    } catch (e) {
        res.status(401).json({error: e})
    }

};

// Controlador para la solicitud DELETE a la ruta de usuarios
export const productosDelete = async(req, res) => {
    try {
        const { id } = req.params;
        const productoDeleted = await Producto.findByIdAndDelete(id)
        res.json({
            msg: 'Producto borrado con éxito',
            infoProducto: productoDeleted// Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con PUT
        });
    } catch (e) {
        res.status(401).json({ error: e })
    }
};

// Exporta los controladores de las rutas de usuarios para que estén disponibles para otros módulos