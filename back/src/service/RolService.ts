import { DatabaseException } from "../exception";
import { Rol } from "../model";
import { RolRepository } from "../repository";

const obtenerRoles = (): Promise<Rol[]> => {
  try {
    return RolRepository.obtenerRoles();
  } catch (error: any) {
    throw new DatabaseException(error.message);
  }
};

export const RolService = {
  obtenerRoles,
};
