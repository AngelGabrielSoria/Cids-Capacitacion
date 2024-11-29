import dataSource from "../db";
import {TareaEntity} from "../entity";
import {DatabaseException} from "../exception";
import type {Desarrollador, Tarea} from "../model";


const _tareaRepository = dataSource.getRepository(TareaEntity);

const crearTarea = async (tarea: any) => {
    try {
        tarea.estado = {id: 1};
        return await _tareaRepository.save(tarea);
    } catch (error: any) {
        throw error;
    }
}

const obtenerTarea = async (id: number) => {
    try {
        return await _tareaRepository.findOne({where: {id}, relations: ['proyecto', 'asignado', 'estado']});
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const actualizarTarea = async (id: number, tarea: any) => {
    try {
        await _tareaRepository.update(id, tarea);
        return obtenerTarea(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const eliminarTarea = async (id: number) => {
    try {
        await _tareaRepository.delete(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const obtenerTareas = async (): Promise<Tarea[]> => {
    try {
        return await _tareaRepository.find({
            relations: {
                proyecto: true,
                asignado: true,
                estado: true
            }
        });
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const cambiarEstadoTarea = async (id: number, estado: any) => {
    try {
        await _tareaRepository.update(id, estado);
        return obtenerTarea(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const asignarDesarrolladorTarea = async (id: number, desarrollador: any) => {
    try {
        const tarea = await obtenerTarea(id);
        if (!tarea) {
            throw new DatabaseException('Tarea not found');
        }
        tarea.asignado = desarrollador;
        await _tareaRepository.save(tarea);
        return tarea;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const obtenerEstado = async (id: number) => {
    try {
        const tarea = await obtenerTarea(id);
        if (!tarea) {
            throw new DatabaseException('Tarea not found');
        }
        return tarea.estado;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const actualizarEstado = async (id: number, estado: any) => {
    try {
        await _tareaRepository.update(id, estado);
        return obtenerTarea(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

export const TareaRepository = {
    crearTarea,
    obtenerTareas,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstadoTarea,
    asignarDesarrolladorTarea,
    obtenerEstado,
    actualizarEstado

};
