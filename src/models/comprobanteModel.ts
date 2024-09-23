import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('comprobante')
export class Comprobante extends BaseEntity {

    @PrimaryGeneratedColumn()
    idComprobante: number;

    @Column("int", { width: 11, nullable: false })
    idUsuario: number;

    @Column({ type: 'timestamptz' })
	fechaCreacion: Date;

    @Column({ type: 'timestamptz' })
	fechaCierre: Date;

    @Column("decimal", { precision: 12, scale: 4, nullable: false})
	total: number;

    @Column("int", { width: 1, nullable: false })
	eliminado: number;
    
}