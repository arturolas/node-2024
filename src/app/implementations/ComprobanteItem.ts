import { Request, Response } from "express";
import { IComprobanteItemRepository } from "@repositories/ComprobanteItem";
import { ComprobanteItem } from "@entities/ComprobanteItem";
import { ResponseDTO } from "@dtos/Response";
import { IComprobanteItem } from "@dtos/ComprobanteItem";

export class ComprobanteItemUserCase implements IComprobanteItemRepository {
  async Listar(): Promise<ResponseDTO> {
    const comprobanteItem = await ComprobanteItem.find();
    return { status: true, data: comprobanteItem };
  }
  async Registrar(req: Request): Promise<ResponseDTO> {
    return await ComprobanteItem.save(req.body);
  }
  async ComprobanteItemDetalle(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    const comprobanteItem = (await ComprobanteItem.findOneBy({
      idComprobanteItem: Number(id),
    })) as IComprobanteItem | unknown;
    if (!comprobanteItem) return { status: false, data: comprobanteItem };
    return { status: true, data: comprobanteItem };
  }
  async Actualizar(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    await ComprobanteItem.update(
      { idComprobanteItem: Number(id) },
      { ...req.body }
    );
    const comprobanteItem = await this.ComprobanteItemDetalle(req);
    return { status: true, data: comprobanteItem };
  }
  async Eliminar(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    await ComprobanteItem.update(
      { idComprobanteItem: Number(id) },
      { eliminado: 0 }
    );
    return await this.ComprobanteItemDetalle(req);
  }
}
