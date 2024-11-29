import dataSource from "../db";
import {DesarrolladorEntity, ProyectoEntity, TareaEntity} from "../entity";
import {DatabaseException} from "../exception";

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
            where: {id},
            relations: {
                tareas: {
                    estado: true,
                    asignado: true,
                },
                responsable: true,
                desarrolladores: {
                    rol: true,
                },
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
            },
        });
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const agregarTareaProyecto = async (id: number, tarea: TareaEntity) => {
    try {
        const proyecto = await obtenerProyecto(id);
        if (proyecto) {
            proyecto.tareas.push(tarea);
            if (tarea.asignado) {
                await agregarDesarrollador(id, tarea.asignado);
            }
            await _proyectoRepository.save(proyecto);
        }
        return proyecto;
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
            where: {id},
            relations: ["tareas", "tareas.desarrollador"]
        });
        const desarrolladores = proyecto?.tareas.map(tarea => tarea.asignado).filter(Boolean);
        return desarrolladores || [];

    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const agregarResponsable = async (id: number, desarrollador: DesarrolladorEntity) => {
    try {
        await _proyectoRepository.update(id, {responsable: desarrollador});
        return obtenerProyecto(id);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const agregarDesarrollador = async (id: number, desarrollador: DesarrolladorEntity) => {
    try {
        const proyecto = await obtenerProyecto(id, ["desarrolladores"]);
        if (proyecto) {
            if (!proyecto.desarrolladores) {
                proyecto.desarrolladores = [];
            }
            proyecto.desarrolladores.push(desarrollador);
            await _proyectoRepository.save(proyecto);
        }
        return proyecto;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const tareasSinAsignar = async () => {
    try {
        const tareas = await dataSource.getRepository(TareaEntity).find({
            relations: ["asignado"],
        });
        return tareas.filter(tarea => !tarea.asignado);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

const desarrolladoresSinAsignar = async () => {
    try {
        const desarrolladores = await dataSource.getRepository(DesarrolladorEntity).find();
        return desarrolladores
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

export const ProyectoRepository = {
    crearProyecto,
    obtenerProyectos,
    obtenerProyecto,
    actualizarProyecto,
    eliminarProyecto,
    agregarTareaProyecto,
    obtenerTareas,
    obtenerDesarrolladores,
    agregarResponsable,
    agregarDesarrollador,
    tareasSinAsignar,
    desarrolladoresSinAsignar
};