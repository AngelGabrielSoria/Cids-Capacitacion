import {IsDateString, IsOptional, IsString, ValidateNested} from "class-validator";
import {DesarrolladorDto} from "../desarrollador/DesarrolladorDto";
import {CrearTareaDto} from "../tarea/CrearTareaDto";

export class ProyectoDto {
    @IsOptional()
    @IsString({message: "El nombre debe ser un texto."})
    nombre: string;

    @IsOptional()
    @IsString({message: "La descripción debe ser un texto."})
    descripcion: string;

    @IsOptional()
    @IsDateString({}, {message: "La fecha de inicio debe ser un formato de fecha válido."})
    fechaInicio: Date;

    @IsOptional()
    @IsDateString({}, {message: "La fecha de fin debe ser un formato de fecha válido."})
    fechaFin: Date;

    @IsOptional()
    @ValidateNested()
    responsable: DesarrolladorDto;

    @IsOptional()
    @ValidateNested()
    tareas: CrearTareaDto[];
}