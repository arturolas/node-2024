import { AutenticacionController } from "@controllers/AutenticacionController";
import { BaseRouter } from "@helpers/Router";

export class AutenticacionRouter extends BaseRouter<AutenticacionController> {
  constructor() {
    super(AutenticacionController);
  }
  routes(): void {
    // this.router.get("/", (req, res) => this.controller.Listar(res));
    this.router.post("/", (req, res) =>
      this.controller.AutenticarUsuario(req, res)
    );
    // this.router.get("/:id", (req, res) => this.controller.Detalle(req, res));
    // this.router.put("/:id", (req, res) => this.controller.Actualizar(req, res));
    // this.router.delete("/:id", (req, res) =>
    //   this.controller.Eliminar(req, res)
    // );
  }
}
