import { Desarrollador } from "./Desarrollador";
import { Estado } from "./Estado";
import { Proyecto } from "./Proyecto";

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  estado: Estado;
  proyecto: Proyecto;
  asignado: Desarrollador;
  fechaLimite: Date;
  fechaCreacion: Date;
  fechaActualizacion: Date;
}
