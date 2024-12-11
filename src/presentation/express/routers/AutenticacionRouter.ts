import { AutenticacionController } from "@controllers/AutenticacionController";
import { BaseRouter } from "@helpers/Router";

export class AutenticacionRouter extends BaseRouter<AutenticacionController> {
  constructor() {
    super(AutenticacionController);
  }
  routes(): void {
    this.router.post("/", (req, res) =>
      this.controller.AutenticarUsuario(req, res)
    );
  }
}
