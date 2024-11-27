import {IsDateString, IsNotEmpty, IsOptional, IsString, ValidateNested} from "class-validator";
import { DesarrolladorDto } from "./DesarrolladorDto";
import { TareaDto } from "./TareaDto";

export class ProyectoDto {
    @IsNotEmpty({ message: "El nombre es obligatorio." })
    @IsString({ message: "El nombre debe ser un texto." })
    nombre: string;

    @IsNotEmpty({ message: "La descripción es obligatoria." })
    @IsString({ message: "La descripción debe ser un texto." })
    descripcion: string;

    @IsNotEmpty({ message: "La fecha de inicio es obligatoria." })
    @IsDateString({}, { message: "La fecha de inicio debe ser un formato de fecha válido." })
    fechaInicio: Date;

    @IsNotEmpty({ message: "La fecha de fin es obligatoria." })
    @IsDateString({}, { message: "La fecha de fin debe ser un formato de fecha válido." })
    fechaFin: Date;

    @IsNotEmpty({ message: "El id del responsable es obligatorio." })
    @ValidateNested()
    idResponsable: DesarrolladorDto;

    @IsOptional()
    @ValidateNested()
    tareas: TareaDto[];
}