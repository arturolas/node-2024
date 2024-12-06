import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";
import { Usuario } from "@entities/Usuario";
import { ComprobanteItem } from "@entities/ComprobanteItem";

@Entity("comprobante")
export class Comprobante extends BaseEntity {
  @PrimaryGeneratedColumn()
  idComprobante: number;

  @Column("int", { width: 11, nullable: false })
  idUsuario: number;

  @Column("date", { nullable: false })
  fechaCreacion: Date;

  @Column("date", { nullable: false })
  fechaCierre: Date;

  @Column("decimal", { precision: 12, scale: 4, nullable: false })
  total: number;

  @Column("int", { width: 1, nullable: false })
  eliminado: number;

  @OneToOne(() => Usuario, (usuario) => usuario.comprobantes)
  @JoinColumn({ name: "idUsuario" })
  usuario: Usuario;
}
