import { Tarea } from '../model';

export type CrearTareaDto = Pick<Tarea, 'titulo' | 'descripcion' | 'fechaInicio' | 'asignado' | 'estado'>;