import { Request, Response } from "express";
import { IUsuarioRepository } from "@repositories/Usuario";
import { IUsuario } from "@dtos/Usuario";
import { Usuario } from "@entities/Usuario";
import { ResponseDTO } from "@dtos/Response";
import { IUserUpdateDTO } from "@dtos/Usuario";

export class UsuarioUserCase implements IUsuarioRepository {
  constructor() {}
  async BuscarUsuarioCorreo(correo: string): Promise<ResponseDTO> {
    const usuarioExiste = (await Usuario.findOneBy({
      correo: correo,
    })) as IUsuario | unknown;
    if (!usuarioExiste) return { status: false, data: usuarioExiste };
    return { status: true, data: usuarioExiste };
  }
  async Listar(): Promise<ResponseDTO> {
    const data: IUsuario[] = await Usuario.find();
    return { status: true, data };
  }
  async Registrar(req: Request): Promise<ResponseDTO> {
    const usuario = req.body;
    const data = await Usuario.save(usuario);
    return { status: true, data };
  }
  async UsuarioDetalle(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    const usuarioExiste = (await Usuario.findOneBy({
      idUsuario: Number(id),
    })) as IUsuario | unknown;
    if (!usuarioExiste) return { status: false, data: usuarioExiste };
    return { status: true, data: usuarioExiste };
  }
  async Actualizar(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    await Usuario.update({ idUsuario: Number(id) }, { ...req.body });
    const data = await this.UsuarioDetalle(req);
    return { status: true, data };
  }
  async ActualizarMod(req: IUserUpdateDTO): Promise<ResponseDTO> {
    await Usuario.update({ idUsuario: Number(req.idUsuario) }, { ...req });
    return await this.UsuarioDetalleMod(req);
  }
  async UsuarioDetalleMod(req: IUserUpdateDTO): Promise<ResponseDTO> {
    const { idUsuario } = req;
    const usuarioExiste = (await Usuario.findOneBy({
      idUsuario: Number(idUsuario),
    })) as IUsuario | unknown;
    if (!usuarioExiste) return { status: false, data: usuarioExiste };
    return { status: true, data: usuarioExiste };
  }
  async Eliminar(req: Request): Promise<ResponseDTO> {
    const { id } = req.params;
    await Usuario.update({ idUsuario: Number(id) }, { eliminado: 1 });
    return await this.UsuarioDetalle(req);
  }
}
