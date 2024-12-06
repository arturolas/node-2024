import { ComprobanteController } from "@controllers/ComprobanteController";
import { BaseRouter } from "@helpers/Router";

export class ComprobanteRouter extends BaseRouter<ComprobanteController> {
  constructor() {
    super(ComprobanteController);
  }
  routes(): void {
    this.router.get("/", (req, res) => this.controller.Listar(res));
    this.router.post("/", (req, res) => this.controller.Registrar(req, res));
    this.router.get("/:id", (req, res) => this.controller.Detalle(req, res));
    this.router.put("/:id", (req, res) => this.controller.Actualizar(req, res));
    this.router.delete("/:id", (req, res) =>
      this.controller.Eliminar(req, res)
    );
  }
}
