// import { Desarrollador } from '../../../desarrolladores/domain/model/desarrollador.model';

export type Tarea = {
	id: number;
	nombre: string;
	descripcion: string;
	fechaInicio: Date;
	fechaFin: Date;
	// responsable: Desarrollador;
	fechaCreacion: Date;
	fechaActualizacion: Date;
	tareas: Tarea[];
};
