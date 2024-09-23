import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usuarioRoutes from './routes/usuarioRoute';
import productoRoutes from './routes/productoRoute';
import comprobanteRoutes from './routes/comprobanteRoute';
import comprobanteItemRoutes from './routes/comprobanteItemRoute';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    console.log('Hola mundo');
    res.send("Hola mundo");
});

app.use("/usuario", usuarioRoutes);
app.use("/producto", productoRoutes);
app.use("/comprobante", comprobanteRoutes);
app.use("/comprobanteItem", comprobanteItemRoutes);

export default app;