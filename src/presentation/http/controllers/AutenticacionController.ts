import { Request, Response } from "express";
import { HttpSuccess } from "@https/HttpSuccess";
import { HttpErrors } from "@https/HttpErrors";
import { UsuarioUserCase } from "@implementations/Usuario";
import { UsuarioErrorType } from "@enums/Usuario/ErrorType";
import { PasswordHasher } from "../../../infra/providers/PasswordHasher";
import { AutenticacionErrorType } from "@enums/Autenticacion/Errortype";
import { GenerateRefreshTokenProvider } from "../../../infra/providers/GenerateRefreshToken";
import { AutenticacionUserCase } from "@implementations/Autenticacion";

export class AutenticacionController {
  constructor(
    // private usuarioUserCase: UsuarioUserCase = new UsuarioUserCase(),
    private httpSuccess: HttpSuccess = new HttpSuccess(),
    private httpErrors: HttpErrors = new HttpErrors(),
    // private passwordHasher: PasswordHasher = new PasswordHasher(),
    // private generateRefreshTokenProvider: GenerateRefreshTokenProvider = new GenerateRefreshTokenProvider(),
    private autenticacionUserCase: AutenticacionUserCase = new AutenticacionUserCase()
  ) {}

  async AutenticarUsuario(req: Request, res: Response) {
    try {
      const body = req.body;
      const { status, data } =
        await this.autenticacionUserCase.AutenticarUsuario(body);
      if (!status) return this.httpErrors.error_404(res, data);
      return this.httpSuccess.success_200(res, data);
      // const { correo, password } = req.body;
      // const { status, data } = await this.usuarioUserCase.BuscarUsuarioCorreo(
      //   correo
      // );
      // if (!status)
      //   return this.httpErrors.error_404(
      //     res,
      //     UsuarioErrorType.UsuarioNoEncontrado
      //   );
      // const passwordMatch = await this.passwordHasher.comparePasswords(
      //   password,
      //   data.password
      // );
      // if (!passwordMatch) {
      //   return this.httpErrors.error_404(
      //     res,
      //     AutenticacionErrorType.EmailOrPasswordWrong
      //   );
      // }
      //   const token = await this.generateRefreshTokenProvider.generateToken(
      //     data.id
      //   );
      //   const refreshTokenFounded =
      //     await this.refreshTokenRepository.findByUserId(data.id);

      //   if (refreshTokenFounded) {
      //     await this.refreshTokenRepository.delete(data.id);
      //   }

      //   const refreshToken = await this.refreshTokenRepository.create(data.id);
      //   const user = await this.userRepository.create({
      //     email: userEntity.email.address,
      //     name: userEntity.name,
      //     password: passwordHashed,
      //   });
      //   return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
}
