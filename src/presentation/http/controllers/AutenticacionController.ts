import { Request, Response } from "express";
import { HttpSuccess } from "@https/HttpSuccess";
import { HttpErrors } from "@https/HttpErrors";
import { AutenticacionUserCase } from "@implementations/Autenticacion";

export class AutenticacionController {
  constructor(
    private httpSuccess: HttpSuccess = new HttpSuccess(),
    private httpErrors: HttpErrors = new HttpErrors(),
    private autenticacionUserCase: AutenticacionUserCase = new AutenticacionUserCase()
  ) {}

  async AutenticarUsuario(req: Request, res: Response) {
    try {
      const body = req.body;
      const { status, data } =
        await this.autenticacionUserCase.AutenticarUsuario(body);
      if (!status) return this.httpErrors.error_404(res, data);
      return this.httpSuccess.success_200(res, data);
    } catch (e) {
      return this.httpErrors.error_500(res, e);
    }
  }
}
