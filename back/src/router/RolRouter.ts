import { NextFunction, Request, Response, Router } from "express";

import { RolController } from "../controller";

const RolRouter = Router();

// Ruta para obtener todos los roles
RolRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await RolController.obtenerRoles(req, res);
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener un rol por su id
RolRouter.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await RolController.eliminarRol(req, res);
    } catch (error) {
        next(error);
    }
});

// Ruta para crear un rol
RolRouter.post( "/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await RolController.agregarRol(req, res);
    } catch (error) {
        next(error);
    }
});

export default RolRouter;
