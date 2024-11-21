import { IsDateString, IsEmail, IsOptional, IsString, ValidateNested } from "class-validator";

import { RolDto } from "./RolDto";

export class ActualizarDesarrolladorDto {
  @IsOptional()
  @IsString({ message: "El nombre debe ser un texto." })
  nombre: string;

  @IsOptional()
  @IsEmail({}, { message: "El correo debe ser un formato de correo válido." })
  correo: string;

  @IsOptional()
  @ValidateNested()
  rol: RolDto;

  @IsOptional()
  @IsDateString({}, { message: "La fecha de contratación debe ser un formato de fecha válido." })
  fechaContratacion: Date;
}
