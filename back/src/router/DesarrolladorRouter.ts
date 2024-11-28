import {NextFunction, Request, Response, Router} from "express";

import {DesarrolladorController} from "../controller";
import {ActualizarDesarrolladorDto, CrearDesarrolladorDto} from "../dto";
import {validateDto} from "../middleware";

const DesarrolladorRouter = Router();

// Obtener todos los desarrolladores
DesarrolladorRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await DesarrolladorController.obtenerDesarrolladores(req, res);
    } catch (error) {
        next(error);
    }
});

// Obtener un desarrollador por id
DesarrolladorRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await DesarrolladorController.obtenerDesarrollador(req, res);
    } catch (error) {
        next(error);
    }
});

// Crear un desarrollador, pasando los datos en el body
DesarrolladorRouter.post(
    "/",
    validateDto(CrearDesarrolladorDto),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await DesarrolladorController.crearDesarrollador(req, res);
        } catch (error) {
            next(error);
        }
    }
);

// Actualizar un desarrollador
DesarrolladorRouter.put(
    "/:id",
    validateDto(ActualizarDesarrolladorDto),
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await DesarrolladorController.actualizarDesarrollador(req, res);
        } catch (error) {
            next(error);
        }
    }
);

// Eliminar un desarrollador
DesarrolladorRouter.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await DesarrolladorController.eliminarDesarrollador(req, res);
    } catch (error) {
        next(error);
    }
});

// Ruta para asignar una tarea, pasando el id de la tarea por body
DesarrolladorRouter.patch("/:id/tareas", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await DesarrolladorController.asignarTarea(req, res);
    } catch (error) {
        next(error);
    }
});


export default DesarrolladorRouter;
