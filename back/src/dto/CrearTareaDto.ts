import {IsDateString, IsNotEmpty, IsString, ValidateNested} from "class-validator";

import { DesarrolladorDto } from "./DesarrolladorDto";
import {EstadoDto} from "./EstadoDto";
import {ProyectoDto} from "./ProyectoDto";

export class CrearTareaDto {
    @IsNotEmpty({message: "El id del proyecto es obligatorio."})
    @ValidateNested()
    id_Proyecto: ProyectoDto;

    @IsNotEmpty({message: "El encargado es obligatorio."})
    @ValidateNested()
    Encargado: DesarrolladorDto;

    @IsNotEmpty({message: "El título es obligatorio."})
    @IsString({message: "El título debe ser un texto."})
    titulo: string;

    @IsNotEmpty({message: "La descripción es obligatoria."})
    @IsString({message: "La descripción debe ser un texto."})
    descripcion: string;

    @IsNotEmpty({message: "El id del estado es obligatorio."})
    @ValidateNested()
    id_Estado: EstadoDto;

    @IsNotEmpty({message: "La fecha límite es obligatoria."})
    @IsDateString({}, {message: "La fecha límite debe ser un formato de fecha válido."})
    fechaLimite: Date;
}
