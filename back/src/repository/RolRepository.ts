import dataSource from "../db";
import { RolEntity } from "../entity";
import { DatabaseException } from "../exception";
import { Rol } from "../model";

const _rolRepository = dataSource.getRepository(RolEntity);

const obtenerRoles = (): Promise<Rol[]> => {
  try {
    return _rolRepository.find();
  } catch (error: any) {
    throw new DatabaseException(error.message);
  }
};

export const RolRepository = {
  obtenerRoles,
};
