import { UsuarioController } from "@controllers/UsuarioController";
import { BaseRouter } from "@helpers/Router";
import { AsegurarAutenticacion } from "../middlewares/AsegurarAutenticacion";

export class UsuarioRouter extends BaseRouter<UsuarioController> {
  constructor() {
    super(UsuarioController);
  }
  routes(): void {
    this.router.get("/", AsegurarAutenticacion, (req, res) =>
      this.controller.Listar(res)
    );
    this.router.post("/", AsegurarAutenticacion, (req, res) =>
      this.controller.Registrar(req, res)
    );
    this.router.get("/:id", AsegurarAutenticacion, (req, res) =>
      this.controller.Detalle(req, res)
    );
    this.router.put("/:id", AsegurarAutenticacion, (req, res) =>
      this.controller.Actualizar(req, res)
    );
    this.router.delete("/:id", AsegurarAutenticacion, (req, res) =>
      this.controller.Eliminar(req, res)
    );
  }
}
