import { UsuarioController } from "../controllers/usuarioController";

import { BaseRouter } from "../shared/router";

export class usuarioRoute extends BaseRouter<UsuarioController> {
  constructor() {
    super(UsuarioController);
  }
  routes(): void {
    this.router.get("/", (req, res) => this.controller.consultar(res));
    this.router.post("/", (req, res) => this.controller.ingresar(req, res));
    this.router.get("/:id", (req, res) =>
      this.controller.consultarDetalle(req, res)
    );
    this.router.put("/:id", (req, res) => this.controller.actualizar(req, res));
    this.router.delete("/:id", (req, res) => this.controller.borrar(req, res));
  }
}
