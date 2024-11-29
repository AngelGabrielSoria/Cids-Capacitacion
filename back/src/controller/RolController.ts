import {Request, Response} from "express";

import {RolService} from "../service";

const obtenerRoles = async (req: Request, res: Response): Promise<Response> => {
    try {
        const roles = await RolService.obtenerRoles();
        return res.json(roles);
    } catch (error) {
        throw error;
    }
};

const eliminarRol = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {id} = req.params;
        await RolService.eliminarRol(Number(id));
        return res.status(204).json();
    } catch (error) {
        throw error;
    }
};

const agregarRol = async (req: Request, res: Response): Promise<Response> => {
    try {
        const rol = req.body;
        const response = await RolService.agregarRol(rol);
        return res.status(201).json(response);
    } catch (error) {
        throw error;
    }
}

const devsPorRol = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {id} = req.params;
        const response = await RolService.devsPorRol(Number(id));
        return res.json(response);
    } catch (error) {
        throw error;
    }
}

export const RolController = {
    obtenerRoles,
    eliminarRol,
    agregarRol,
    devsPorRol,
};
