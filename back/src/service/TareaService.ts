import {Tarea} from '../model';
import {TareaRepository} from "../repository/TareaRepository";


const crearTarea = async (tarea: Tarea) => {
    try {
        return await TareaRepository.crearTarea(tarea);
    } catch (error: any) {
        throw error;
    }
}

const obtenerTareas = async (): Promise<Tarea[]> => {
    try {
        return await TareaRepository.obtenerTareas();
    } catch (error: any) {
        throw error;
    }
}

const obtenerTarea = async (id: number) => {
    try {
        return await TareaRepository.obtenerTarea(id);
    } catch (error: any) {
        throw error;
    }
}

const actualizarTarea = async (id: number, tarea: Tarea) => {
    try {
        return await TareaRepository.actualizarTarea(id, tarea);
    } catch (error: any) {
        throw error;
    }
}

const eliminarTarea = async (id: number) => {
    try {
        return await TareaRepository.eliminarTarea(id);
    } catch (error: any) {
        throw error;
    }
}

const cambiarEstadoTarea = async (id: number, estado: any) => {
    try {
        return await TareaRepository.cambiarEstadoTarea(id, estado);
    } catch (error: any) {
        throw error;
    }
}

const asignarDesarrolladorTarea = async (id: number, desarrollador: any) => {
    try {
        return await TareaRepository.asignarDesarrolladorTarea(id, desarrollador);
    } catch (error: any) {
        throw error;
    }
}

const obtenerEstado = async (id: number) => {
    try {
        return await TareaRepository.obtenerEstado(id);
    } catch (error: any) {
        throw error;
    }
}

const actualizarEstado = async (id: number, estado: any) => {
    try {
        return await TareaRepository.actualizarEstado(id, estado);
    } catch (error: any) {
        throw error;
    }
}

export const TareaService = {
    crearTarea,
    obtenerTareas,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstadoTarea,
    asignarDesarrolladorTarea,
    obtenerEstado,
    actualizarEstado,
};
