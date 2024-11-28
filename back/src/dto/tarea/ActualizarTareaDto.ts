import {IsDateString, IsOptional, IsString, ValidateNested} from "class-validator";

import {DesarrolladorDto} from "../desarrollador/DesarrolladorDto";
import {CrearEstadoDto} from "../estado/CrearEstadoDto";
import {ProyectoDto} from "../proyecto/ProyectoDto";

export class ActualizarTareaDto {
    @IsOptional()
    @ValidateNested()
    proyecto: ProyectoDto;

    @IsOptional()
    @ValidateNested()
    asignado: DesarrolladorDto;

    @IsOptional()
    @IsString({message: "El título debe ser un texto."})
    titulo: string;


    @IsOptional()
    @IsString({message: "La descripción debe ser un texto."})
    descripcion: string;

    @IsOptional()
    @ValidateNested()
    estado: CrearEstadoDto;

    @IsOptional()
    @IsDateString({}, {message: "La fecha límite debe ser un formato de fecha válido."})
    fechaLimite: Date;
}
