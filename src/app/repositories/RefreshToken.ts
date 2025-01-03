import { RefreshTokenDTO } from "../../domain/dtos/Autenticacion";

export interface IRefreshTokenRepository {
  create(user_id: string): Promise<RefreshTokenDTO>;
  findById(refreshToken: string): Promise<RefreshTokenDTO | unknown>;
  findByUserId(user_id: string): Promise<RefreshTokenDTO | unknown>;
  delete(user_id: string): Promise<void>;
}
