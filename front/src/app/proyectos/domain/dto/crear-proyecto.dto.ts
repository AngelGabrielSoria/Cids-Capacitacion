import { Proyecto } from '../model/proyecto.model';

export type CrearProyectoDto = Pick<Proyecto, 'nombre' | 'descripcion' | 'fechaInicio' | 'fechaFin' | 'responsable' >;
