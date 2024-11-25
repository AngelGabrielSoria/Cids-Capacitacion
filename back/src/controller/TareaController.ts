import { Request, Response } from "express";
import { TareaService } from "../service";


const crearTarea = async (req: Request, res: Response) => {
    try {
        const tarea = req.body;
        const response = await TareaService.crearTarea(tarea);
        res.status(201).json(response);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const obtenerTareas = async (req: Request, res: Response) => {
    try {
        const response = await TareaService.obtenerTareas();
        res.status(200).json(response);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const obtenerTarea = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const response = await TareaService.obtenerTarea(id);
        res.status(200).json(response);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const actualizarTarea = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const tarea = req.body;
        const response = await TareaService.actualizarTarea(id, tarea);
        res.status(200).json(response);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

const eliminarTarea = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await TareaService.eliminarTarea(id);
        res.sendStatus(204);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}


const asignarTarea = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const desarrollador = req.body;
        const response = await TareaService.asignarDesarrolladorTarea(id, desarrollador);
        res.status(200).json(response);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}


export const TareaController = {
    crearTarea,
    obtenerTareas,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    asignarTarea

}