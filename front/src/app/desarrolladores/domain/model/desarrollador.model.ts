import { Rol } from './rol.model';
import { Proyecto } from '../../../proyectos/domain/model/proyecto.model';

export type Desarrollador = {
  id: number;
  nombre: string;
  correo: string;
  rol: Rol;
  fechaContratacion: Date;
  fechaCreacion: Date;
  fechaActualizacion: Date;
  proyectosResponsable: Proyecto[];
  proyectos: Proyecto[];
  tareas: Tarea[];
};
