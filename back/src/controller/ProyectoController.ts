import { Request, Response } from "express";
import { ProyectoService } from "../service/ProyectoService";

const obtenerProyectos = async (req: Request, res: Response): Promise<Response> => {
    try {
        const proyectos = await ProyectoService.obtenerProyectos();
        return res.json(proyectos);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error. Intente nuevamente." });
    }
};

const obtenerProyecto = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido." });
    }
    try {
        const proyecto = await ProyectoService.obtenerProyecto(id);
        return res.json(proyecto);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error. Intente nuevamente." });
    }
};

const crearProyecto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const proyecto = await ProyectoService.crearProyecto(req.body, req.body.desarrollador);
        return res.json(proyecto);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error. Intente nuevamente." });
    }
};

const actualizarProyecto = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido." });
    }
    try {
        const proyecto = await ProyectoService.actualizarProyecto(id, req.body);
        return res.json(proyecto);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error. Intente nuevamente." });
    }
};

const eliminarProyecto = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido." });
    }
    try {
        await ProyectoService.eliminarProyecto(id);
        return res.json({ message: "Proyecto eliminado" });
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error. Intente nuevamente." });
    }
};

const agregarTareaProyecto = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido." });
    }
    try {
        const proyecto = await ProyectoService.agregarTareaProyecto(id, req.body);
        return res.json(proyecto);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error. Intente nuevamente." });
    }
};


// mostrar todas las tareas de un proyecto
const obtenerTareas = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido." });
    }
    try {
        const tareas = await ProyectoService.obtenerTareas(id);
        return res.json(tareas);
    } catch (error) {
        return res.status(500).json({ message: "Ha ocurrido un error. Intente nuevamente." });
    }
};

const obtenerDesarrolladores = async (req: Request, res: Response): Promise<Response> => {
    const id= parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({message: "ID inválido."});
    }
    try {
        const desarrolladores = await ProyectoService.obtenerDesarrolladores(id);
        return res.json(desarrolladores);
    } catch (error) {
        return res.status(500).json({message: "Ha ocurrido un error. Intente nuevamente"})
}};


export const ProyectoController = {
    obtenerProyectos,
    obtenerProyecto,
    crearProyecto,
    actualizarProyecto,
    eliminarProyecto,
    agregarTareaProyecto,
    obtenerTareas,
    obtenerDesarrolladores
};