import {Column, Entity, OneToMany, PrimaryGeneratedColumn, JoinColumn} from "typeorm";

import {Estado} from "../model";
import {TareaEntity} from "./TareaEntity";
import {ProyectoEntity} from "./ProyectoEntity";

@Entity({name: "estados"})
export class EstadoEntity implements Estado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => TareaEntity, (tarea) => tarea.estado)
    @JoinColumn({name: "id_estado"})
    tarea: TareaEntity;

    @OneToMany(() => ProyectoEntity, proyecto => proyecto.desarrolladores)
    proyectos: ProyectoEntity[];
}
