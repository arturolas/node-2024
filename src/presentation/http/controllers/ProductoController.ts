import { Request, Response } from "express";
import { HttpSuccess } from "@https/HttpSuccess";
import { HttpErrors } from "@https/HttpErrors";
import { ProductoUserCase } from "@implementations/Producto";
import { ProductoErrorType } from "@enums/Producto/ErrorType";

export class ProductoController {
  constructor(
    private productoUserCase: ProductoUserCase = new ProductoUserCase(),
    private httpSuccess: HttpSuccess = new HttpSuccess(),
    private httpErrors: HttpErrors = new HttpErrors()
  ) {}

  async Listar(res: Response) {
    try {
      const { data } = await this.productoUserCase.Listar();
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
  async Detalle(req: Request, res: Response) {
    try {
      const { status, data } = await this.productoUserCase.ProductoDetalle(req);
      return !status
        ? this.httpErrors.error_404(res, ProductoErrorType.ProductoNoEncontrado)
        : this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Registrar(req: Request, res: Response) {
    try {
      const { data } = await this.productoUserCase.Registrar(req);
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Actualizar(req: Request, res: Response) {
    try {
      const { status } = await this.productoUserCase.ProductoDetalle(req);
      if (!status)
        return this.httpErrors.error_404(
          res,
          ProductoErrorType.ProductoNoEncontrado
        );
      const { data } = await this.productoUserCase.Actualizar(req);
      return this.httpSuccess.success_201(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }

  async Eliminar(req: Request, res: Response) {
    try {
      const { status } = await this.productoUserCase.ProductoDetalle(req);
      if (!status)
        return this.httpErrors.error_404(
          res,
          ProductoErrorType.ProductoNoEncontrado
        );

      await this.productoUserCase.Eliminar(req);
      return this.httpSuccess.success_201(res);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
}
