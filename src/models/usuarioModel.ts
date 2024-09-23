import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('usuario')
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column("varchar", { length: 200, nullable: false })
    nombre: String;
    
    @Column("varchar", { length: 2, nullable: false })
	genero: String;

    @Column("varchar", { length: 100, nullable: false })
	correo: String;

    @Column("varchar", { length: 250, nullable: false })
	password: String;

    @Column("int", { width: 1, nullable: false })
	eliminado: number;

}