import { Proyecto } from "../model";
import { ProyectoRepository } from "../repository";

const crearProyecto = async (proyecto: Proyecto, desarrollador: any) => {
    try {
        proyecto.responsable = desarrollador;
        return await ProyectoRepository.crearProyecto(proyecto, desarrollador);
    } catch (error: any) {
        throw error;
    }
};

const obtenerProyectos = async () => {
    try {
        return await ProyectoRepository.obtenerProyectos();
    } catch (error: any) {
        throw error;
    }
};

const obtenerProyecto = async (id: number) => {
    try {
        return await ProyectoRepository.obtenerProyecto(id, ["desarrollador", "tareas"]);
    } catch (error: any) {
        throw error;
    }
};

const actualizarProyecto = async (id: number, proyecto: Proyecto) => {
    try {
        return await ProyectoRepository.actualizarProyecto(id, proyecto);
    } catch (error: any) {
        throw error;
    }
};

const eliminarProyecto = async (id: number) => {
    try {
        return await ProyectoRepository.eliminarProyecto(id);
    } catch (error: any) {
        throw error;
    }
};

const agregarTareaProyecto = async (id: number, tarea: any) => {
    try {
        return await ProyectoRepository.agregarTareaProyecto(id, tarea);
    } catch (error: any) {
        throw error;
    }
};

const obtenerTareas = async (id: number) => {
    try {
        return await ProyectoRepository.obtenerTareas(id);
    } catch (error: any) {
        throw error;
    }
};

const obtenerDesarrolladores = async (id: number) => {
    try {
        return await ProyectoRepository.obtenerDesarrolladores(id);
    } catch (error: any) {
        throw error;
    }
};

const agregarResponsable = async (id: number, responsable: any) => {
    try {
        return await ProyectoRepository.agregarResponsable(id, responsable);
    } catch (error: any) {
        throw error;
    }
}

const agregarDesarrollador = async (id: number, desarrollador: any) => {
    try {
        return await ProyectoRepository.agregarDesarrollador(id, desarrollador);
    } catch (error: any) {
        throw error;
    }
}

const tareasSinAsignar = async () => {
    try {
        return await ProyectoRepository.tareasSinAsignar();
    } catch (error: any) {
        throw error;
    }
}


export const ProyectoService = {
    crearProyecto,
    obtenerProyectos,
    obtenerProyecto,
    obtenerTareas,
    actualizarProyecto,
    eliminarProyecto,
    agregarTareaProyecto,
    obtenerDesarrolladores,
    agregarResponsable,
    agregarDesarrollador,
    tareasSinAsignar
};