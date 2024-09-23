import { Request, Response } from "express";
import { Producto } from "../models/productoModel";


class ProductoController {
    constructor() {

    }

    async consultar(req: Request, res: Response) {
        try {
            const data = await Producto.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }

    async consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Producto.findOneBy({ idProducto: Number(id) });
            if (!registro) {
                throw new Error('Producto no encontrado');
            }

            res.status(200).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async ingresar(req: Request, res: Response) {
        try {
            const registro = await Producto.save(req.body);
            res.status(201).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Producto.findOneBy({ idProducto: Number(id) });
            if (!registro) {
                throw new Error('Producto no encontrado');
            }
            await Producto.update({ idProducto: Number(id) }, req.body);
            const registroActualizado = await Producto.findOneBy({ idProducto: Number(id) });
            res.status(200).json(registroActualizado);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message + " | esta webada " + id);
        }
    }

    async borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Producto.findOneBy({ idProducto: Number(id) });
            if (!registro) {
                throw new Error('Producto no encontrado');
            }
            await Producto.delete({ idProducto: Number(id) });
            //res.status(204);
            res.status(200).json("Producto borrado");
            
        } catch (err) {
            if (err instanceof Error)

                res.status(500).send(err.message);
        }
    }
}

export default new ProductoController();