import { DataSource } from "typeorm";
import { Usuario } from "@entities/Usuario";
import { Producto } from "@entities/Producto";
import { Comprobante } from "@entities/Comprobante";
import { ComprobanteItem } from "@entities/ComprobanteItem";

export class Connection {
  private static instance: Connection;
  private dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource({
      type: "mysql",
      host: process.env.HOST,
      port: 3306,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DB,
      logging: true,
      entities: [Usuario, Producto, Comprobante, ComprobanteItem],
      synchronize: false,
    });
  }

  public static getInstance(): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection();
    }
    return Connection.instance;
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }

  public async initialize(): Promise<void> {
    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
      console.log("Database connection established.");
    }
  }

  public async close(): Promise<void> {
    if (this.dataSource.isInitialized) {
      await this.dataSource.destroy();
      console.log("Database connection closed.");
    }
  }
}
