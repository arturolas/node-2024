import { Request, Response } from "express";
import { Usuario } from "../models/usuarioModel";


class UsuarioController {
    constructor() {

    }

    async consultar(req: Request, res: Response) {
        try {
            const data = await Usuario.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }

    async consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Usuario.findOneBy({ idUsuario: Number(id) });
            if (!registro) {
                throw new Error('Usuario no encontrado');
            }

            res.status(200).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async ingresar(req: Request, res: Response) {
        try {
            const registro = await Usuario.save(req.body);
            res.status(201).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Usuario.findOneBy({ idUsuario: Number(id) });
            if (!registro) {
                throw new Error('Usuario no encontrado');
            }
            await Usuario.update({ idUsuario: Number(id) }, req.body);
            const registroActualizado = await Usuario.findOneBy({ idUsuario: Number(id) });
            res.status(200).json(registroActualizado);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Usuario.findOneBy({ idUsuario: Number(id) });
            if (!registro) {
                throw new Error('Usuario no encontrado');
            }
            await Usuario.delete({ idUsuario: Number(id) });
            res.status(204);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}

export default new UsuarioController();