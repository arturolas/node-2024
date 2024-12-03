// import { config } from "process";

import { Request, Response } from "express";
import { UsuarioService } from "../service/usuarioService";
import { ThrowCustom } from "../shared/http.response";
import { Usuario } from "../models/usuarioModel";

export class UsuarioServiceImpl implements UsuarioService {
  async delete(req: Request): Promise<Usuario> {
    const { id } = req.params;
    const user = await this.findOneBy(req);
    await Usuario.update(
      { idUsuario: Number(id) },
      { eliminado: user.eliminado == 1 ? 0 : 1 }
    );
    return await this.findOneBy(req);
  }
  async update(req: Request): Promise<Usuario> {
    const { id } = req.params;
    await this.findOneBy(req);
    await Usuario.update({ idUsuario: Number(id) }, { ...req.body });
    return await this.findOneBy(req);
  }
  async findOneBy(req: Request): Promise<Usuario> {
    const { id } = req.params;
    const data = await Usuario.findOneBy({ idUsuario: Number(id) });
    if (data) {
      return data;
    }
    throw new ThrowCustom(`El registro con ID ${id} no existe.`);
  }
  async getAll(): Promise<Usuario[]> {
    return await Usuario.find();
  }
  async save(req: Request): Promise<Usuario> {
    return await Usuario.save(req.body);
  }
}
