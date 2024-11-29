import dataSource from "../db";
import {ActualizarDesarrolladorDto, CrearDesarrolladorDto} from "../dto";
import {DesarrolladorEntity, TareaEntity} from "../entity";
import {DatabaseException} from "../exception";
import {type Desarrollador} from "../model";

const _desarrolladorRepository = dataSource.getRepository(DesarrolladorEntity);
const _tareaRepository = dataSource.getRepository(TareaEntity);

const obtenerDesarrolladores = async (): Promise<Desarrollador[]> => {
    try {
        return await _desarrolladorRepository.find({
            relations: {
                rol: true,
                proyectosResponsable: true,
                proyectos: true,
                tareas: true,
            },
        });
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const obtenerDesarrollador = async (id: number): Promise<Desarrollador | null> => {
    try {
        return await _desarrolladorRepository.findOne({
            where: {id},
            relations: {
                rol: true,
                proyectosResponsable: true,
                proyectos: true,
                tareas: true,
            },
        });
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const crearDesarrollador = (payload: CrearDesarrolladorDto): Promise<Desarrollador> => {
    try {
        const desarrollador: Omit<Desarrollador, "id" | "proyectosResponsable" | "proyectos" | "tareas"> = {
            ...payload,
            fechaCreacion: new Date(),
            fechaActualizacion: new Date(),
        };

        return _desarrolladorRepository.save(desarrollador);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const actualizarDesarrollador = async (id: number, payload: ActualizarDesarrolladorDto): Promise<Desarrollador> => {
    try {
        const desarrollador: Pick<Desarrollador, "nombre" | "correo" | "rol" | "fechaContratacion" | "fechaActualizacion"> =
            {
                ...payload,
                fechaActualizacion: new Date(),
            };

        await _desarrolladorRepository.update(id, desarrollador);

        return obtenerDesarrollador(id) as Promise<Desarrollador>;
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const eliminarDesarrollador = async (id: number): Promise<void> => {
    try {
        const desarrollador = await _desarrolladorRepository.findOne({
            where: { id },
            relations: ["tareas", "proyectosResponsable", "proyectos"]
        });

        if (!desarrollador) {
            throw new DatabaseException(`Desarrollador con id ${id} no encontrado.`);
        }

        await _desarrolladorRepository.remove(desarrollador);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};

const asignarTarea = async (id: number, idTarea: number): Promise<Desarrollador> => {
    try {
        const desarrollador = await obtenerDesarrollador(id);

        if (!desarrollador) {
            throw new DatabaseException(`Desarrollador con id ${id} no encontrado.`);
        }

        const tarea = await _tareaRepository.findOne({where: {id: idTarea}});

        if (!tarea) {
            throw new DatabaseException(`Tarea con id ${idTarea} no encontrada.`);
        }

        desarrollador.tareas.push(tarea);

        return await _desarrolladorRepository.save(desarrollador);
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
};


export const DesarrolladorRepository = {
    obtenerDesarrolladores,
    obtenerDesarrollador,
    crearDesarrollador,
    actualizarDesarrollador,
    eliminarDesarrollador,
    asignarTarea
};