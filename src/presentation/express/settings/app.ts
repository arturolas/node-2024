import express from "express";
import { UsuarioRouter } from "@routers/UsuarioRouter";
import { ComprobanteRouter } from "@routers/ComprobanteRouter";
import { ProductoRouter } from "@routers/ProductoRouter";
import { AutenticacionRouter } from "@routers/AutenticacionRouter";
import * as dotenv from "dotenv";
import { documentsRoutes } from '../settings/swagger'

dotenv.config();

export class App {
  public app: express.Application = express();
  public enviroment = process.env;

  constructor(private port?: number | string) {
    this.app = express();
    this.middlewares();
    this.settings();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port || this.enviroment.PORT_SERVER);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    // this.app.use("/", express.static("output"));
    this.app.use("/", documentsRoutes);
    this.app.use("/usuario", new UsuarioRouter().router);
    this.app.use("/comprobante", new ComprobanteRouter().router);
    this.app.use("/producto", new ProductoRouter().router);
    this.app.use("/autenticacion", new AutenticacionRouter().router);
  }

  routers(): Array<express.Router> {
    return [
      new UsuarioRouter().router,
      new ComprobanteRouter().router,
      new ProductoRouter().router,
      new AutenticacionRouter().router,
    ];
  }

  async listen() {
    this.app.listen(this.app.get("port"));
    console.log(
      `server started at ${this.enviroment.HOST_SERVER}:${this.enviroment.PORT_SERVER}`
    );
    console;
  }
}
