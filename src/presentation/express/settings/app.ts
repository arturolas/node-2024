import express from "express";
import { UsuarioRouter } from "@routers/UsuarioRouter";
import * as dotenv from "dotenv";
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
    this.app.use("/", express.static("output"));
    this.app.use("/usuario", new UsuarioRouter().router);
  }

  routers(): Array<express.Router> {
    return [new UsuarioRouter().router];
  }

  async listen() {
    this.app.listen(this.app.get("port"));
    console.log(
      `server started at ${this.enviroment.HOST_SERVER}:${this.enviroment.PORT_SERVER}`
    );
    console;
  }
}
