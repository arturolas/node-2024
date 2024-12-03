import express from "express";
import comprobanteItemController from "../controllers/comprobanteItemController";
const router = express.Router();

router.get("/", comprobanteItemController.consultar);

router.post("/", comprobanteItemController.ingresar);

router
  .route("/:id")
  .get(comprobanteItemController.consultarDetalle)
  .put(comprobanteItemController.actualizar)
  .delete(comprobanteItemController.borrar);

export default router;
