import { Request, Response } from "express";
import { Usuario } from "../models/usuarioModel";

export class UsuarioService {
  async getAll(): Promise<Usuario[]> {
    return [];
  }
  async save(req: Request): Promise<Usuario> {
    return new Usuario();
  }
  async findOneBy(req: Request): Promise<Usuario> {
    return new Usuario();
  }
  async update(req: Request): Promise<Usuario> {
    return new Usuario();
  }
  async delete(req: Request): Promise<Usuario> {
    return new Usuario();
  }
}
