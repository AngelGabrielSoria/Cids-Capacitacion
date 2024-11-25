import { Proyecto } from '../model/proyecto.model';

export type ActualizarProyectoDto = Pick<Proyecto, 'nombre' | 'descripcion' | 'fechaInicio' | 'fechaFin' | 'responsable' >;
