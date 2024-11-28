import {NextFunction, Request, Response, Router} from "express";
import {EstadoController} from "../controller/EstadoController";

import {validateDto} from "../middleware";
import {ActualizarEstadoDto} from "../dto";

const EstadoRouter = Router()

// Obtiene todos los estados
EstadoRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await EstadoController.obtenerEstados(req, res)
    } catch (error) {
        next(error)
    }
})

// Obtiene un solo estado
EstadoRouter.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await EstadoController.obtenerEstado(req, res)
    } catch (error) {
        next(error)
    }
})

// Crea un nuevo estado
EstadoRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await EstadoController.crearEstado(req, res)
    } catch (error) {
        next(error)
    }
})

// Actualizar un estado
EstadoRouter.patch("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        validateDto(ActualizarEstadoDto)
        await EstadoController.actualizarEstado(req, res)
    } catch (error) {
        next(error)
    }
});


export default EstadoRouter