import {IsDateString, IsOptional, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {ActualizarEstadoDto} from "../estado/ActualizarEstadoDto";
import {ActualizarDesarrolladorDto} from "../desarrollador/ActualizarDesarrolladorDto";
import {ActualizarProyectoDto} from "../proyecto/ActualizarProyectoDto";

export class ActualizarTareaDto {
    @IsOptional()
    @ValidateNested()
    proyecto: ActualizarProyectoDto;

    @IsOptional()
    @ValidateNested()
    asignado: ActualizarDesarrolladorDto;

    @IsOptional()
    @IsString({message: "El título debe ser un texto."})
    titulo: string;

    @IsOptional()
    @IsString({message: "La descripción debe ser un texto."})
    descripcion: string;

    @IsOptional()
    @ValidateNested()
    estado: ActualizarEstadoDto;

    @IsOptional()
    @IsDateString({}, {message: "La fecha límite debe ser un formato de fecha válido."})
    @Type(() => Date)
    fechaLimite: Date;
}
