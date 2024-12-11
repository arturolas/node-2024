import { Request } from "express";
import { ResponseDTO } from "@dtos/Response";
import { IAutenticacionDTO } from "@dtos/Autenticacion";

export interface IAutenticacionRepository {
  AutenticarUsuario(req: IAutenticacionDTO): Promise<ResponseDTO>;
}
