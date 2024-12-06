import { Request } from "express";
import { IRegistrarUsuario, IUsuario } from "@dtos/Usuario";

export interface IUsuarioRepository {
  Listar(): Promise<IUsuario[]>;
  Registrar(req: Request): Promise<IRegistrarUsuario>;
  UsuarioDetalle(req: Request): Promise<IUsuario>;
  Actualizar(req: Request): Promise<IUsuario>;
  Eliminar(req: Request): Promise<IUsuario>;
}
