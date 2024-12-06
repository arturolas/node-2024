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
export interface IActualizarComprobante {
  idUsuario: number;
  fechaCreacion: Date;
  fechaCierre: Date;
  total: number;
  eliminado: number;
}
export interface IRegistrarComprobante {
  idUsuario: number;
  fechaCreacion: Date;
  fechaCierre: Date;
  total: number;
  eliminado: number;
}
