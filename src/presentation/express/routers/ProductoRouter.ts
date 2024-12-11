import { ProductoController } from "@controllers/ProductoController";
import { BaseRouter } from "@helpers/Router";
import { AsegurarAutenticacion } from "../middlewares/AsegurarAutenticacion";

export class ProductoRouter extends BaseRouter<ProductoController> {
  constructor() {
    super(ProductoController);
  }
  routes(): void {
    this.router.get("/",AsegurarAutenticacion, (req, res) => this.controller.Listar(res));
    this.router.post("/",AsegurarAutenticacion, (req, res) => this.controller.Registrar(req, res));
    this.router.get("/:id",AsegurarAutenticacion, (req, res) => this.controller.Detalle(req, res));
    this.router.put("/:id",AsegurarAutenticacion, (req, res) => this.controller.Actualizar(req, res));
    this.router.delete("/:id",AsegurarAutenticacion, (req, res) =>
      this.controller.Eliminar(req, res)
    );
  }
}
