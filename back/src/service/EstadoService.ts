import {ActualizarEstadoDto, CrearEstadoDto} from "../dto";
import {NotFoundException} from "../exception";
import { Estado} from "../model";
import {EstadoRepository} from "../repository";

const obtenerEstados = async (): Promise<Estado[]> => {
    try {
        return await EstadoRepository.obtenerEstados();
    } catch (error: any) {
        throw error;
    }
};

const obtenerEstado = async (id: number): Promise<Estado | null > => {
    try {
        const estado =  await EstadoRepository.obtenerEstado(id)

        if (!estado) {
            throw new NotFoundException(`Estado con id ${id} no encontrado.`);
        }

        return estado;
    } catch (error: any) {
        throw error;
    }
};

const crearEstado = async (payload: CrearEstadoDto): Promise<Estado> => {
    try {
        return await EstadoRepository.crearEstado(payload);
    } catch (error: any) {
        throw error;
    }
}

const actualizarEstado = async (id: number, payload: ActualizarEstadoDto): Promise<Estado | null> => {
    try {
        const estado = await EstadoRepository.obtenerEstado(id);

        if (!estado) {
            throw new NotFoundException(`Estado con id ${id} no encontrado.`);
        }

        return await EstadoRepository.actualizarEstado(id, payload);

    } catch (error: any) {
        throw error;
    }
}

export const EstadoService =  {
    obtenerEstados,
    obtenerEstado,
    crearEstado,
    actualizarEstado,
}