import { Request, Response } from "express";
import { HttpSuccess } from "../helpers/implementations/HttpSuccess";
import { HttpErrors } from "../helpers/implementations/HttpErrors";
import { UsuarioUserCase } from "@implementations/Usuario";

export class UsuarioController {
  constructor(
    private usuarioUserCase: UsuarioUserCase = new UsuarioUserCase(),
    private httpSuccess: HttpSuccess = new HttpSuccess(),
    private httpErrors: HttpErrors = new HttpErrors()
  ) {}

  async Listar(res: Response) {
    try {
      const data = await this.usuarioUserCase.Listar();
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
  async Detalle(req: Request, res: Response) {
    try {
      const data = await this.usuarioUserCase.UsuarioDetalle(req);
      console.log(typeof data);
      return Object.keys(data).length === 0
        ? this.httpErrors.error_404(res, "No se ha encontrado registro")
        : this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Registrar(req: Request, res: Response) {
    try {
      const data = await this.usuarioUserCase.Registrar(req);
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Actualizar(req: Request, res: Response) {
    try {
      const usuarioDetalle = await this.usuarioUserCase.UsuarioDetalle(req);
      if (Object.keys(usuarioDetalle).length === 0)
        return this.httpErrors.error_404(res, "No se ha encontrado registro");

      const data = await this.usuarioUserCase.Actualizar(req);
      return this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Eliminar(req: Request, res: Response) {
    try {
      const usuarioDetalle = await this.usuarioUserCase.UsuarioDetalle(req);

      if (Object.keys(usuarioDetalle).length === 0)
        return this.httpErrors.error_404(res, "No se ha encontrado registro");

      const data = await this.usuarioUserCase.Eliminar(req);
      return this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
}
