import dataSource from "../db";
import { EstadoEntity } from "../entity";
import { DatabaseException } from "../exception";

const _estadoRepository = dataSource.getRepository(EstadoEntity);

const obtenerEstado = async () => {
    try {
        return await _estadoRepository.find();
    } catch (error: any) {
        throw new DatabaseException(error.message);
    }
}

export const EstadoRepository = {
    obtenerEstado,
};
