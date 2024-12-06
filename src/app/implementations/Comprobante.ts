import { Request, Response } from "express";
import { IComprobanteRepository } from "@repositories/Comprobante";
import { IComprobante, IRegistrarComprobante } from "@dtos/Comprobante";
import { Comprobante } from "@entities/Comprobante";

export class ComprobanteUserCase implements IComprobanteRepository {
  async Listar(): Promise<IComprobante[]> {
    const users = await Comprobante.find({
      relations: ["usuario"],
    });
    return users;
  }
  async Registrar(req: Request): Promise<IRegistrarComprobante> {
    return await Comprobante.save(req.body);
  }
  async ComprobanteDetalle(req: Request): Promise<IComprobante> {
    const { id } = req.params;
    const data = await Comprobante.findOneBy({ idComprobante: Number(id) });
    if (data) return data;
    return new Comprobante();
  }
  async Actualizar(req: Request): Promise<IComprobante> {
    const { id } = req.params;
    await Comprobante.update({ idComprobante: Number(id) }, { ...req.body });
    return await this.ComprobanteDetalle(req);
  }
  async Eliminar(req: Request): Promise<IComprobante> {
    const { id } = req.params;
    await Comprobante.update({ idComprobante: Number(id) }, { eliminado: 0 });
    return await this.ComprobanteDetalle(req);
  }
}
