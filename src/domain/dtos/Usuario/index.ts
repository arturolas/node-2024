export interface IUsuario {
  idUsuario: number;
  nombre: string;
  genero: string;
  correo: string;
  password?: string;
  token?: string;
  eliminado: number;
}
export interface IUserUpdateDTO {
  idUsuario: number;
  nombre?: string;
  genero?: string;
  correo?: string;
  password?: string;
  token?: string;
  eliminado?: number;
}
