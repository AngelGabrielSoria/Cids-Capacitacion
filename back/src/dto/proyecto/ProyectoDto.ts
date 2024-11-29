import {IsDateString, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import {DesarrolladorDto} from "../desarrollador/DesarrolladorDto";
import {CrearTareaDto} from "../tarea/CrearTareaDto";
import {Type} from "class-transformer";

export class ProyectoDto {
    @IsNotEmpty({message: "El nombre es obligatorio."})
    @IsString({message: "El nombre debe ser un texto."})
    nombre: string;

    @IsNotEmpty({message: "La descripción es obligatoria."})
    @IsString({message: "La descripción debe ser un texto."})
    descripcion: string;

    @IsNotEmpty({message: "La fecha de inicio es obligatoria."})
    @IsDateString({}, {message: "La fecha de inicio debe ser un formato de fecha válido."})
    @Type(() => Date)
    fechaInicio: Date;

    @IsNotEmpty({message: "La fecha de fin es obligatoria."})
    @IsDateString({}, {message: "La fecha de fin debe ser un formato de fecha válido."})
    @Type(() => Date)
    fechaFin: Date;

    @IsOptional()
    @ValidateNested()
    responsable: DesarrolladorDto;

    @IsOptional()
    @ValidateNested()
    tareas: CrearTareaDto[];
}