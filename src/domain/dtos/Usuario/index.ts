export interface IUsuario {
  idUsuario: number;
  nombre: String;
  genero: String;
  correo: String;
  password: String;
  eliminado: number;
}
export interface IActualizarUsuario {
  nombre: String;
  genero: String;
  correo: String;
  password: String;
  eliminado: number;
}
export interface IRegistrarUsuario {
  nombre: String;
  genero: String;
  correo: String;
  password: String;
  eliminado: number;
}
