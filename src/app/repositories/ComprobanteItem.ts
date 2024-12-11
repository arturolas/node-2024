import { Request } from "express";
import { ResponseDTO } from "@dtos/Response";

export interface IComprobanteItemRepository {
  Listar(): Promise<ResponseDTO>;
  Registrar(req: Request): Promise<ResponseDTO>;
  ComprobanteItemDetalle(req: Request): Promise<ResponseDTO>;
  Actualizar(req: Request): Promise<ResponseDTO>;
  Eliminar(req: Request): Promise<ResponseDTO>;
}
