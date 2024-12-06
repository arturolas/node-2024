import { Request } from "express";
import { IRegistrarComprobante, IComprobante } from "@dtos/Comprobante";

export interface IComprobanteRepository {
  Listar(): Promise<IComprobante[]>;
  Registrar(req: Request): Promise<IRegistrarComprobante>;
  ComprobanteDetalle(req: Request): Promise<IComprobante>;
  Actualizar(req: Request): Promise<IComprobante>;
  Eliminar(req: Request): Promise<IComprobante>;
}
