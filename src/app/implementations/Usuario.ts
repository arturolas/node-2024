import { Request, Response } from "express";
import { IUsuarioRepository } from "@repositories/Usuario";
import { IRegistrarUsuario, IUsuario } from "@dtos/Usuario";
import { Usuario } from "@entities/Usuario";

export class UsuarioUserCase implements IUsuarioRepository {
  async Listar(): Promise<IUsuario[]> {
    const data: IUsuario[] = await Usuario.find();
    return data;
  }
  async Registrar(req: Request): Promise<IRegistrarUsuario> {
    return await Usuario.save(req.body);
  }
  async UsuarioDetalle(req: Request): Promise<IUsuario> {
    const { id } = req.params;
    const data = await Usuario.findOneBy({ idUsuario: Number(id) });
    if (data) return data;
    return new Usuario();
  }
  async Actualizar(req: Request): Promise<IUsuario> {
    const { id } = req.params;
    await Usuario.update({ idUsuario: Number(id) }, { ...req.body });
    return await this.UsuarioDetalle(req);
  }
  async Eliminar(req: Request): Promise<IUsuario> {
    const { id } = req.params;
    await Usuario.update({ idUsuario: Number(id) }, { eliminado: 0 });
    return await this.UsuarioDetalle(req);
  }
}
