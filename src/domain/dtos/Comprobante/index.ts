import { IUsuario } from "@dtos/Usuario";
export interface IComprobante {
  idComprobante: number;
  idUsuario: number;
  fechaCreacion: Date;
  fechaCierre: Date;
  total: number;
  eliminado: number;
  usuario: IUsuario;
}
