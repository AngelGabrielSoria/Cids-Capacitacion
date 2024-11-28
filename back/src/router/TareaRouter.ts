import { NextFunction, Request, Response, Router } from "express";

import { TareaController } from "../controller";
import { validateDto } from "../middleware";
import { CrearTareaDto, ActualizarTareaDto } from "../dto";


const TareaRouter = Router();

// Ruta para obtener todas las tareas
TareaRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await TareaController.obtenerTareas(req, res);
    } catch (error) {
        next(error);
    }
});

// Ruta para obtener una tarea por su id
TareaRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await TareaController.obtenerTarea(req, res);
    } catch (error) {
        next(error);
    }
});

// Ruta para crear una tarea
TareaRouter.post(
    "/",
    validateDto(CrearTareaDto),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await TareaController.crearTarea(req, res);
        } catch (error) {
            next(error);
        }
    }
);

// Ruta para actualizar una tarea
TareaRouter.put(
    "/:id",
    validateDto(ActualizarTareaDto),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await TareaController.actualizarTarea(req, res);
        } catch (error) {
            next(error);
        }
    });

// Ruta para asignar una tarea a un desarrollador
TareaRouter.put(
    "/:id/desarrollador",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await TareaController.asignarTarea(req, res);
        } catch (error) {
            next(error);
        }
    });

// Ruta para eliminar una tarea
TareaRouter.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await TareaController.eliminarTarea(req, res);
    } catch (error) {
        next(error);
    }
});

// Ruta para obtener el estado de una tarea
TareaRouter.get("/:id/estado", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await TareaController.obtenerEstado(req, res);
    } catch (error) {
        next(error);
    }
});

// Ruta para actualizar el estado de una tarea
TareaRouter.put("/:id/estado", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await TareaController.actualizarEstado(req, res);
    } catch (error) {
        next(error);
    }
});

export default TareaRouter;