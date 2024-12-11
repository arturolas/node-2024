import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comprobanteItem")
export class ComprobanteItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  idComprobanteItem: number;

  @Column("int", { width: 11, nullable: false })
  idComprobante: number;

  @Column("int", { width: 11, nullable: false })
  idProducto: number;

  @Column("varchar", { length: 200, nullable: false })
  nombreItem: string;

  @Column("decimal", { precision: 12, scale: 4, nullable: false })
  cantidad: string;

  @Column("decimal", { precision: 12, scale: 4, nullable: false })
  precioUnitario: number;

  @Column("decimal", { precision: 12, scale: 4, nullable: false })
  total: number;

  @Column("int", { width: 1, nullable: false })
  eliminado: number;
}
