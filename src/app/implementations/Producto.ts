import { Request, Response } from "express";
import { IProductoRepository } from "@repositories/Producto";
import { IProducto } from "@dtos/Producto";
import { Producto } from "@entities/Producto";
import { ResponseDTO } from "@dtos/Response";

export class ProductoUserCase implements IProductoRepository {
  async Listar(): Promise<ResponseDTO> {
    const data = await Producto.find();
    return { status: true, data };
  }
  async Registrar(req: Request): Promise<ResponseDTO> {
    return await Producto.save(req.body);
  }
  async ProductoDetalle(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    const productoExiste = (await Producto.findOneBy({
      idProducto: Number(id),
    })) as IProducto | unknown;
    if (!productoExiste) return { status: false, data: productoExiste };
    return { status: true, data: productoExiste };
  }
  async Actualizar(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    await Producto.update({ idProducto: Number(id) }, { ...req.body });
    const data = this.ProductoDetalle(req);
    return { status: true, data };
  }
  async Eliminar(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    await Producto.update({ idProducto: Number(id) }, { eliminado: 0 });
    const data = await this.ProductoDetalle(req);
    return { status: true, data };
  }
}
