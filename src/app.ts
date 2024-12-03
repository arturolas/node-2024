// app.use("/usuario", this.usuarioRoute);
// app.use("/producto", productoRoutes);
// app.use("/comprobante", comprobanteRoutes);
// app.use("/comprobanteItem", comprobanteItemRoutes);
import express from "express";
// Routes
import { usuarioRoute } from "./routes/usuarioRoute";
import { enviroment } from "../.env";

export class App {
  public app: express.Application = express();
  private enviroment: enviroment = new enviroment();

  constructor(private port?: number | string) {
    this.app = express();
    this.middlewares();
    this.settings();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port || this.enviroment.PORT);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use("/", express.static("output"));
    this.app.use("/usuario", new usuarioRoute().router);
  }

  routers(): Array<express.Router> {
    return [new usuarioRoute().router];
  }

  async listen() {
    this.app.listen(this.app.get("port"));
    console.log(`server started at http://localhost:${this.app.get("port")}`);
  }
}
