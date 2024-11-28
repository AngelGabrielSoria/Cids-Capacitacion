import dataSource from "../db";
import { EstadoEntity } from "../entity";
import {DatabaseException, NotFoundException} from "../exception";
import {CrearEstadoDto} from "../dto";
import { type Estado} from "../model";

const _estadoRepository = dataSource.getRepository(EstadoEntity);

const obtenerEstados = async () => {
    try {
        return await _estadoRepository.find();
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const obtenerEstado = async (id: number): Promise<Estado | null > => {
    try {

        return await _estadoRepository.findOne({ where: { id } });

    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const crearEstado = async (payload: CrearEstadoDto) => {
    try {
        return await _estadoRepository.save(payload);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const  actualizarEstado = async (id: number, payload: CrearEstadoDto) => {
    try {
        await _estadoRepository.update(id, payload);
        return await _estadoRepository.findOne({where: {id}});
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const eliminarEstado = async (id: number) => {
    try {
        await _estadoRepository.delete(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

export const EstadoRepository = {
    obtenerEstado,
    obtenerEstados,
    crearEstado,
    actualizarEstado,
    eliminarEstado
};
