import dataSource from "../db";
import {RolEntity} from "../entity";
import {DatabaseException} from "../exception";
import {Rol} from "../model";

const _rolRepository = dataSource.getRepository(RolEntity);

const obtenerRoles = (): Promise<Rol[]> => {
    try {
        return _rolRepository.find();
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const obtenerRol = async (id: number): Promise<Rol | null> => {
    try {
        return await _rolRepository.findOne({where: {id}});
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const eliminarRol = async (id: number) => {
    try {
        await _rolRepository.delete(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const agregarRol = async (rol: any) => {
    try {
        return await _rolRepository.save(rol);
    } catch (error: any) {
        throw error;
    }
}

const devsPorRol = async (id: number) => {
    try {
        const rol = await _rolRepository.findOne({where: {id}, relations: ['desarrollador']});
        return rol?.desarrollador;
    } catch (error: any) {
        throw error;
    }
}

export const RolRepository = {
    obtenerRoles,
    eliminarRol,
    agregarRol,
    devsPorRol,
};
