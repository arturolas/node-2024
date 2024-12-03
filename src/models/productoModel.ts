import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ComprobanteItem } from "./comprobanteItemModel";

@Entity("producto")
export class Producto extends BaseEntity {
  @PrimaryGeneratedColumn()
  idProducto: number;

  @Column("varchar", { length: 200, nullable: false })
  nombre: String;

  @Column("decimal", { precision: 12, scale: 4, nullable: false })
  precio: number;

  @Column("int", { width: 1, nullable: false })
  eliminado: number;

  @OneToMany(
    () => ComprobanteItem,
    (comprobanteItem) => comprobanteItem.producto
  )
  comprobanteItems: ComprobanteItem[];
}
