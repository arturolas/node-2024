import express from "express";
import productoController from "../controllers/productoController";
const router = express.Router();

router.get("/", productoController.consultar);

router.post("/", productoController.ingresar);

router
  .route("/:id")
  .get(productoController.consultarDetalle)
  .put(productoController.actualizar)
  .delete(productoController.borrar);

export default router;
