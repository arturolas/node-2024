import express from "express";
import comprobanteController from "../controllers/comprobanteController";
const router = express.Router();

router.get("/", comprobanteController.consultar);

router.post("/", comprobanteController.ingresar);

router
  .route("/:id")
  .get(comprobanteController.consultarDetalle)
  .put(comprobanteController.actualizar)
  .delete(comprobanteController.borrar);

export default router;
