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
import { Usuario } from "./usuarioModel";
import { ComprobanteItem } from "./comprobanteItemModel";

@Entity("comprobante")
export class Comprobante extends BaseEntity {
  @PrimaryGeneratedColumn()
  idComprobante: number;

  @Column("int", { width: 11, nullable: false })
  idUsuario: number;

  //@Column({ type: 'timestamptz' })
  @Column()
  fechaCreacion: Date;

  //@Column({ type: 'timestamptz' })
  @Column()
  fechaCierre: Date;

  @Column("decimal", { precision: 12, scale: 4, nullable: false })
  total: number;

  @Column("int", { width: 1, nullable: false })
  eliminado: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.comprobantes)
  @JoinColumn({ name: "idUsuario" })
  usuario: Usuario;

  @OneToMany(
    () => ComprobanteItem,
    (comprobanteItem) => comprobanteItem.comprobante
  )
  comprobanteItems: ComprobanteItem[];
}
