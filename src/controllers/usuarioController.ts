import { Request, Response } from "express";
import { UsuarioServiceImpl } from "../serviceImpl/usuarioServiceImpl";
import { HttpResponse } from "../shared/http.response";

export class UsuarioController {
  constructor(
    private usuarioServiceImpl: UsuarioServiceImpl = new UsuarioServiceImpl(),
    private httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async consultar(res: Response) {
    try {
      const data = await this.usuarioServiceImpl.getAll();
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    try {
      const data = await this.usuarioServiceImpl.findOneBy(req);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.NotFoundRecord(res, e);
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      const data = await this.usuarioServiceImpl.save(req);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }

  async actualizar(req: Request, res: Response) {
    try {
      const data = await this.usuarioServiceImpl.update(req);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.NotFoundRecord(res, e);
    }
  }

  async borrar(req: Request, res: Response) {
    try {
      const data = await this.usuarioServiceImpl.delete(req);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.NotFoundRecord(res, e);
    }
  }
}
