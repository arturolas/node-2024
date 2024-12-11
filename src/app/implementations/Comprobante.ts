import { Request, Response } from "express";
import { IComprobanteRepository } from "@repositories/Comprobante";
import { Comprobante } from "@entities/Comprobante";
import { ResponseDTO } from "@dtos/Response";

export class ComprobanteUserCase implements IComprobanteRepository {
  async Listar(): Promise<ResponseDTO> {
    const users = await Comprobante.find({
      relations: ["usuario"],
    });
    return { status: true, data: users };
  }
  async Registrar(req: Request): Promise<ResponseDTO> {
    const user = await Comprobante.save(req.body);
    return { status: true, data: user };
  }
  async ComprobanteDetalle(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    const comprobanteExiste = (await Comprobante.findOneBy({
      idComprobante: Number(id),
    })) as Comprobante | unknown;
    if (!comprobanteExiste) return { status: false, data: comprobanteExiste };
    return { status: true, data: comprobanteExiste };
  }
  async Actualizar(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    await Comprobante.update({ idComprobante: Number(id) }, { ...req.body });
    return await this.ComprobanteDetalle(req);
  }
  async Eliminar(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    await Comprobante.update({ idComprobante: Number(id) }, { eliminado: 0 });
    const comprobante = await this.ComprobanteDetalle(req);
    return { status: true, data: comprobante };
  }
}
