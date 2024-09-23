import { DataSource } from "typeorm";
import { Usuario } from "../models/usuarioModel";
import { Producto } from "../models/productoModel";
import { Comprobante } from "../models/comprobanteModel";
import { ComprobanteItem } from "../models/comprobanteItemModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "node_arturolas",
    logging: true,
    //entities: [ Usuario, Producto, Comprobante, ComprobanteItem],
    entities: [ Usuario, Producto],
    synchronize: false

});