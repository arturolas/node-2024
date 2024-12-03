import { Request, Response } from "express";
import { Usuario } from "../models/usuarioModel";
import { Comprobante } from "../models/comprobanteModel";

class ComprobanteController {
  constructor() {}

  async consultar(req: Request, res: Response) {
    try {
      const data = await Comprobante.find({ relations: { usuario: true } });
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Comprobante.findOne({
        where: { idComprobante: Number(id) },
        relations: { usuario: true },
      });
      if (!registro) {
        throw new Error("Curso no encontrado");
      }

      res.status(200).json(registro);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async ingresar(req: Request, res: Response) {
    try {
      const { usuario } = req.body;

      const usuarioRegistro = await Usuario.findOneBy({
        idUsuario: Number(usuario),
      });
      if (!usuarioRegistro) {
        throw new Error("Profesor no encontrado");
      }

      const registro = await Comprobante.save(req.body);
      res.status(201).json(registro);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const { usuario } = req.body;

      const usuarioRegistro = await Usuario.findOneBy({
        idUsuario: Number(usuario),
      });
      if (!usuarioRegistro) {
        throw new Error("Profesor no encontrado");
      }

      const registro = await Comprobante.findOneBy({
        idComprobante: Number(id),
      });
      if (!registro) {
        throw new Error("Curso no encontrado");
      }
      await Comprobante.update({ idComprobante: Number(id) }, req.body);
      const registroActualizado = await Comprobante.findOne({
        where: { idComprobante: Number(id) },
        relations: { usuario: true },
      });
      res.status(200).json(registroActualizado);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const registro = await Comprobante.findOneBy({
        idComprobante: Number(id),
      });
      if (!registro) {
        throw new Error("Curso no encontrado");
      }
      await Comprobante.delete({ idComprobante: Number(id) });
      //res.status(204);
      res.status(200).json("Comprobante borrado");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
}

export default new ComprobanteController();
