import { Desarrollador } from "../../../desarrolladores/domain";

export class Proyecto {
    id: number;
    nombre: string;
    descripcion: string;
    fechaInicio: Date;
    responsable: Desarrollador;
    fechaFin: Date;

    constructor(id: number, nombre: string, descripcion: string, fechaInicio: Date, fechaFin: Date, responsable: Desarrollador) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.responsable = responsable;
    }
}