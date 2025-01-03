import { Request, Response } from "express";
import { HttpSuccess } from "@https/HttpSuccess";
import { HttpErrors } from "@https/HttpErrors";
import { UsuarioUserCase } from "@implementations/Usuario";
import { UsuarioErrorType } from "@enums/Usuario/ErrorType";

export class UsuarioController {
  constructor(
    private usuarioUserCase: UsuarioUserCase = new UsuarioUserCase(),
    private httpSuccess: HttpSuccess = new HttpSuccess(),
    private httpErrors: HttpErrors = new HttpErrors()
  ) {}

  async Listar(res: Response) {
    try {
      const { data } = await this.usuarioUserCase.Listar();
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
  async Detalle(req: Request, res: Response) {
    try {
      const { status, data } = await this.usuarioUserCase.UsuarioDetalle(req);
      return !status
        ? this.httpErrors.error_404(res, UsuarioErrorType.UsuarioNoEncontrado)
        : this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Registrar(req: Request, res: Response) {
    try {
      const { data } = await this.usuarioUserCase.Registrar(req);
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Actualizar(req: Request, res: Response) {
    try {
      const { status } = await this.usuarioUserCase.UsuarioDetalle(req);
      if (!status)
        return this.httpErrors.error_404(
          res,
          UsuarioErrorType.UsuarioNoEncontrado
        );
      const { data } = await this.usuarioUserCase.Actualizar(req);
      return this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Eliminar(req: Request, res: Response) {
    try {
      const { status } = await this.usuarioUserCase.UsuarioDetalle(req);

      if (!status)
        return this.httpErrors.error_404(
          res,
          UsuarioErrorType.UsuarioNoEncontrado
        );
      await this.usuarioUserCase.Eliminar(req);
      return this.httpSuccess.success_201(res);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
}
