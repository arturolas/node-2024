import { Request, Response } from "express";
import { Producto } from "../models/productoModel";
import { Comprobante } from "../models/comprobanteModel";
import { ComprobanteItem } from "../models/comprobanteItemModel";


class ComprobanteItemController {
    constructor() {

    }

    async consultar(req: Request, res: Response) {
        try {
            const data = await ComprobanteItem.find({ relations: { comprobante: true, producto: true } });
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }

    async consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await ComprobanteItem.findOne({ where: { idComprobanteItem: Number(id) }, relations: { comprobante: true, producto: true } });
            if (!registro) {
                throw new Error('ComprobanteItem no encontrado');
            }

            res.status(200).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async ingresar(req: Request, res: Response) {
        try {
            const { comprobante } = req.body;
            const { producto } = req.body;

            const comprobanteRegistro = await Comprobante.findOneBy({ idComprobante: Number(comprobante) });
            if (!comprobanteRegistro) {
                throw new Error('Comprobante no encontrado');
            }

            const productoRegistro = await Producto.findOneBy({ idProducto: Number(producto) });
            if (!productoRegistro) {
                throw new Error('Producto no encontrado');
            }

            const registro = await ComprobanteItem.save(req.body);
            res.status(201).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const { comprobante } = req.body;
            const { producto } = req.body;
            
            const comprobanteRegistro = await Comprobante.findOneBy({ idComprobante: Number(comprobante) });
            if (!comprobanteRegistro) {
                throw new Error('Comprobante no encontrado');
            }

            const productoRegistro = await Producto.findOneBy({ idProducto: Number(producto) });
            if (!productoRegistro) {
                throw new Error('Producto no encontrado');
            }

            const registro = await ComprobanteItem.findOneBy({ idComprobanteItem: Number(id) });
            if (!registro) {
                throw new Error('ComprobanteItem no encontrado');
            }
            await ComprobanteItem.update({ idComprobanteItem: Number(id) }, req.body);
            const registroActualizado = await ComprobanteItem.findOne({ where: { idComprobanteItem: Number(id) }, relations: { comprobante: true, producto: true } });
            res.status(200).json(registroActualizado);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await ComprobanteItem.findOneBy({ idComprobanteItem: Number(id) });
            if (!registro) {
                throw new Error('Curso no encontrado');
            }
            await ComprobanteItem.delete({ idComprobanteItem: Number(id) });
            res.status(204);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

}

export default new ComprobanteItemController();