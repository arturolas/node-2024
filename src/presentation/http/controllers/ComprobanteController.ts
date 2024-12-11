import { Request, Response } from "express";
import { HttpSuccess } from "@https/HttpSuccess";
import { HttpErrors } from "@https/HttpErrors";
import { ComprobanteUserCase } from "@implementations/Comprobante";
import { ComprobanteErrorType } from "@enums/Comprobante/ErrorType";

export class ComprobanteController {
  constructor(
    private comprobanteUserCase: ComprobanteUserCase = new ComprobanteUserCase(),
    private httpSuccess: HttpSuccess = new HttpSuccess(),
    private httpErrors: HttpErrors = new HttpErrors()
  ) {}

  async Listar(res: Response) {
    try {
      const { data } = await this.comprobanteUserCase.Listar();
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
  async Detalle(req: Request, res: Response) {
    try {
      const { status } = await this.comprobanteUserCase.ComprobanteDetalle(req);
      if (!status)
        return this.httpErrors.error_404(
          res,
          ComprobanteErrorType.ComprobanteNoEncontrado
        );
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Registrar(req: Request, res: Response) {
    try {
      const data = await this.comprobanteUserCase.Registrar(req);
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Actualizar(req: Request, res: Response) {
    try {
      const { status } = await this.comprobanteUserCase.ComprobanteDetalle(req);
      if (!status)
        return this.httpErrors.error_404(
          res,
          ComprobanteErrorType.ComprobanteNoEncontrado
        );

      const { data } = await this.comprobanteUserCase.Actualizar(req);
      return this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Eliminar(req: Request, res: Response) {
    try {
      const { status } = await this.comprobanteUserCase.ComprobanteDetalle(req);

      if (!status)
        return this.httpErrors.error_404(
          res,
          ComprobanteErrorType.ComprobanteNoEncontrado
        );

      const data = await this.comprobanteUserCase.Eliminar(req);
      return this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
}
