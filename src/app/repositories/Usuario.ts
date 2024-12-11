import { Request } from "express";
import { ResponseDTO } from "@dtos/Response";
import { IUserUpdateDTO,IUsuario } from "@dtos/Usuario";

export interface IUsuarioRepository {
  Listar(): Promise<ResponseDTO>;
  Registrar(req: Request): Promise<ResponseDTO>;
  UsuarioDetalle(req: Request): Promise<ResponseDTO>;
  UsuarioDetalleMod(req: IUserUpdateDTO): Promise<ResponseDTO>;
  Actualizar(req: Request): Promise<ResponseDTO>;
  ActualizarMod(req: IUserUpdateDTO): Promise<ResponseDTO>;
  Eliminar(req: Request): Promise<ResponseDTO>;
  BuscarUsuarioCorreo(correo: string): Promise<ResponseDTO>;
}
