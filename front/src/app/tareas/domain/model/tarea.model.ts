import { Desarrollador } from '../../../desarrolladores/domain/model/';
import { Estado } from './estado.model';

export type Tarea = {
	id: number;
	titulo: string;
	descripcion: string;
	fechaInicio: Date;
	fechaCreacion: Date;
	fechaActualizacion: Date;
	asignado: Desarrollador;
	estado: Estado;
};
