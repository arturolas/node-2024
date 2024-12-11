import { Request } from "express";
import { IRegistrarProductoDTO, IProducto } from "@dtos/Producto";
import { ResponseDTO } from "@dtos/Response";

export interface IProductoRepository {
  Listar(): Promise<ResponseDTO>;
  Registrar(req: Request): Promise<ResponseDTO>;
  ProductoDetalle(req: Request): Promise<ResponseDTO>;
  Actualizar(req: Request): Promise<ResponseDTO>;
  Eliminar(req: Request): Promise<ResponseDTO>;
}
