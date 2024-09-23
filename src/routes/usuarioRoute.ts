import express from 'express';
import usuarioController from '../controllers/usuarioController';
const router = express.Router();


router.get('/', usuarioController.consultar);

router.post('/', usuarioController.ingresar);

router.route("/:id")
    .get(usuarioController.consultarDetalle)
    .put(usuarioController.actualizar)
    .delete(usuarioController.borrar);

export default router;
