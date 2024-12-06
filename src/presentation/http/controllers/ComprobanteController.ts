import { Request, Response } from "express";
import { HttpSuccess } from "../helpers/implementations/HttpSuccess";
import { HttpErrors } from "../helpers/implementations/HttpErrors";
import { ComprobanteUserCase } from "@implementations/Comprobante";

export class ComprobanteController {
  constructor(
    private comprobanteUserCase: ComprobanteUserCase = new ComprobanteUserCase(),
    private httpSuccess: HttpSuccess = new HttpSuccess(),
    private httpErrors: HttpErrors = new HttpErrors()
  ) {}

  async Listar(res: Response) {
    try {
      const data = await this.comprobanteUserCase.Listar();
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
  async Detalle(req: Request, res: Response) {
    try {
      const data = await this.comprobanteUserCase.ComprobanteDetalle(req);
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
      const data = await this.comprobanteUserCase.Registrar(req);
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Actualizar(req: Request, res: Response) {
    try {
      const ComprobanteDetalle =
        await this.comprobanteUserCase.ComprobanteDetalle(req);
      if (Object.keys(ComprobanteDetalle).length === 0)
        return this.httpErrors.error_404(res, "No se ha encontrado registro");

      const data = await this.comprobanteUserCase.Actualizar(req);
      return this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Eliminar(req: Request, res: Response) {
    try {
      const ComprobanteDetalle =
        await this.comprobanteUserCase.ComprobanteDetalle(req);

      if (Object.keys(ComprobanteDetalle).length === 0)
        return this.httpErrors.error_404(res, "No se ha encontrado registro");

      const data = await this.comprobanteUserCase.Eliminar(req);
      return this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
}
