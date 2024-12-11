import { ResponseDTO } from "@dtos/Response";
import { IAutenticacionRepository } from "@repositories/Autenticacion";
import { UsuarioUserCase } from "@implementations/Usuario";
import { Usuario } from "@entities/Usuario";
import { PasswordHasher } from "src/infra/providers/PasswordHasher";
import { AutenticacionErrorType } from "@enums/Autenticacion/Errortype";
import { GenerateRefreshTokenProvider } from "../../infra/providers/GenerateRefreshToken";
import { IAutenticacionDTO } from "@dtos/Autenticacion";
import { IUsuario } from "@dtos/Usuario";

export class AutenticacionUserCase implements IAutenticacionRepository {
  constructor(
    private usuarioUserCase: UsuarioUserCase = new UsuarioUserCase(),
    private passwordHasher: PasswordHasher = new PasswordHasher(),
    private generateRefreshTokenProvider: GenerateRefreshTokenProvider = new GenerateRefreshTokenProvider()
  ) {}
  async AutenticarUsuario(req: IAutenticacionDTO): Promise<ResponseDTO> {
    const { correo, password } = req;

    const usuarioExiste = (await Usuario.findOneBy({
      correo: correo,
    })) as any; //IUsuario | null;

    if (!usuarioExiste)
      return {
        status: false,
        data: { error: AutenticacionErrorType.EmailOrPasswordWrong },
      };

    const passwordMatch = await this.passwordHasher.comparePasswords(
      password,
      usuarioExiste.password
    );

    if (!passwordMatch) {
      return {
        status: false,
        data: { error: AutenticacionErrorType.EmailOrPasswordWrong },
      };
    }
    const token = await this.generateRefreshTokenProvider.generateToken(
      usuarioExiste.idUsuario.toString()
    );
    const { data } = await this.usuarioUserCase.ActualizarMod({
      idUsuario: usuarioExiste.idUsuario,
      token,
    });

    return { status: true, data };
  }
}
