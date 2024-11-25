import {IsDateString, IsOptional, IsString, ValidateNested} from "class-validator";

import { DesarrolladorDto } from "./DesarrolladorDto";
import {EstadoDto} from "./EstadoDto";
import {ProyectoDto} from "./ProyectoDto";

export class ActualizarTareaDto {
    @IsOptional()
    @ValidateNested()
    id_Proyecto: ProyectoDto;

    @IsOptional()
    @ValidateNested()
    Encargado: DesarrolladorDto;

    @IsOptional()
    @IsString({message: "El título debe ser un texto."})
    titulo: string;


    @IsOptional()
    @IsString({message: "La descripción debe ser un texto."})
    descripcion: string;

    @IsOptional()
    @ValidateNested()
    id_Estado: EstadoDto;

    @IsOptional()
    @IsDateString({}, {message: "La fecha límite debe ser un formato de fecha válido."})
    fechaLimite: Date;
}
