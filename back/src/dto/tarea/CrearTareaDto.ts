import {DesarrolladorDto} from "../desarrollador/DesarrolladorDto";
import {ProyectoDto} from "../proyecto/ProyectoDto";
import {CrearEstadoDto} from "../estado/CrearEstadoDto";
import {IsDate, IsInt, IsNotEmpty, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";


export class CrearTareaDto {

    

    

    @IsNotEmpty({message: "El título es obligatorio."})
    @IsString({message: "El título debe ser un texto."})
    titulo: string;

    @IsNotEmpty({message: "La descripción es obligatoria."})
    @IsString({message: "La descripción debe ser un texto."})
    descripcion: string;

    @IsNotEmpty({message: "La fecha Inicial es obligatoria."})
    @IsDate({message: "La fecha Inicial debe ser un formato de fecha válido."})
    @Type(() => Date)
    fechaInicio: Date;


    @IsNotEmpty({message: "La fecha límite es obligatoria."})
    @IsDate({message: "La fecha límite debe ser un formato de fecha válido."})
    @Type(() => Date)
    fechaLimite: Date;

    @IsNotEmpty({message: "El desarrollador asignado es obligatorio."})
    @ValidateNested()
    asignado: DesarrolladorDto;

}
