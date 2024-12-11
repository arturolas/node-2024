export interface IAutenticacionDTO {
  correo: string;
  password: string;
}
export interface RefreshTokenDTO {
  id: string;
  expires_in: number;
  user_id: string;
  createdAt: Date;
}
