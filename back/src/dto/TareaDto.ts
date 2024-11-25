import {DesarrolladorDto} from "./DesarrolladorDto";
import {ProyectoDto} from "./ProyectoDto";
import {EstadoDto} from "./EstadoDto";
import {IsDate, IsInt, IsNotEmpty, IsString, ValidateNested} from "class-validator";


export class TareaDto {

    @IsNotEmpty({message: "El id es obligatorio."})
    @IsInt({message: "El id debe ser un número entero."})
    id: number;

    @IsNotEmpty({message: "El proyecto es obligatorio."})
    @ValidateNested()
    proyecto: ProyectoDto;

    @IsNotEmpty({message: "El desarrollador asignado es obligatorio."})
    @ValidateNested()
    desarrolladorAsignado: DesarrolladorDto;

    @IsNotEmpty({message: "El título es obligatorio."})
    @IsString({message: "El título debe ser un texto."})
    titulo: string;

    @IsNotEmpty({message: "La descripción es obligatoria."})
    @IsString({message: "La descripción debe ser un texto."})
    descripcion: string;

    @IsNotEmpty({message: "El estado es obligatorio."})
    @ValidateNested()
    estado: EstadoDto;

    @IsNotEmpty({message: "La fecha límite es obligatoria."})
    @IsDate({message: "La fecha límite debe ser un formato de fecha válido."})
    fechaLimite: Date;

    @IsNotEmpty({message: "La fecha de creación es obligatoria."})
    @IsDate({message: "La fecha de creación debe ser un formato de fecha válido."})
    fechaCreacion: Date;

    @IsNotEmpty({message: "La fecha de actualización es obligatoria."})
    @IsDate({message: "La fecha de actualización debe ser un formato de fecha válido."})
    fechaActualizacion: Date;

}
