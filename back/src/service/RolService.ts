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

const eliminarRol = async (id: number) => {
    try {
        await RolRepository.eliminarRol(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};


const agregarRol = async (rol: any) => {
    try {
        return await RolRepository.agregarRol(rol);
    } catch (error: any) {
        throw error;
    }
};

export const RolService = {
  obtenerRoles,
  eliminarRol,
  agregarRol
};
