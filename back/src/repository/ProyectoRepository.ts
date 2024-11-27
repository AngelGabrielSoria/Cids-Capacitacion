import dataSource from "../db";
import {DesarrolladorEntity, ProyectoEntity} from "../entity";
import { DatabaseException } from "../exception";

const _proyectoRepository = dataSource.getRepository(ProyectoEntity);


const crearProyecto = async (proyecto: any, desarrollador: any) => {
    try {
        proyecto.responsable = desarrollador;
        return await _proyectoRepository.save(proyecto);
    } catch (error: any) {
        throw error;
    }
};

const obtenerProyecto = async (id: number, relations: string[] = []): Promise<ProyectoEntity | null> => {
    try {
        return await _proyectoRepository.findOne({
            where: { id },
            relations: {
                tareas: true,
                responsable: true,
                desarrolladores: true,
            },
        });
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const actualizarProyecto = async (id: number, proyecto: any) => {
    try {
        await _proyectoRepository.update(id, proyecto);
        return obtenerProyecto(id, ["desarrollador", "tareas"]);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const eliminarProyecto = async (id: number) => {
    try {
        await _proyectoRepository.delete(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const obtenerProyectos = async () => {
    try {
        return await _proyectoRepository.find({
            relations: {
                tareas: true,
                responsable: true,
            },});
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const agregarTareaProyecto = async (id: number, tarea: any) => {
    try {
        await _proyectoRepository.update(id, tarea);
        return obtenerProyecto(id, ["desarrollador", "tareas"]);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const obtenerTareas = async (id: number) => {
    try {
        const proyecto = await obtenerProyecto(id);
        return proyecto?.tareas;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};


const obtenerDesarrolladores = async (id: number) => {
    try {
        const proyecto = await _proyectoRepository.findOne({
            where: { id },
            relations: ["tareas", "tareas.desarrollador"]
        });
        const desarrolladores = proyecto?.tareas.map(tarea => tarea.asignado);
        return desarrolladores;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};


export const ProyectoRepository = {
    crearProyecto,
    obtenerProyectos,
    obtenerProyecto,
    actualizarProyecto,
    eliminarProyecto,
    agregarTareaProyecto,
    obtenerTareas,
    obtenerDesarrolladores
};