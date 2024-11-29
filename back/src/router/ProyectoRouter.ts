import {Router} from "express";
import {ProyectoController} from "../controller";

import {validateDto} from "../middleware";
const ProyectoRouter = Router();


// obtener proyectos
ProyectoRouter.get("/", async (req, res, next) => {
    try {
        await ProyectoController.obtenerProyectos(req, res);
    } catch (error) {
        next(error);
    }
});

// obtener proyecto
ProyectoRouter.get("/:id", async (req, res, next) => {
    try {
        await ProyectoController.obtenerProyecto(req, res);
    } catch (error) {
        next(error);
    }
});


// crear proyecto
ProyectoRouter.post("/", async (req, res, next) => {
    try {
        await ProyectoController.crearProyecto(req, res);
    } catch (error) {
        next(error);
    }
});


// actualizar proyecto
ProyectoRouter.put("/:id", async (req, res, next) => {
    try {
        await ProyectoController.actualizarProyecto(req, res);
    } catch (error) {
        next(error);
    }
});

// eliminar proyecto
ProyectoRouter.delete("/:id", async (req, res, next) => {
    try {
        await ProyectoController.eliminarProyecto(req, res);
    } catch (error) {
        next(error);
    }
});

// agregar responsable a un proyecto
ProyectoRouter.put("/:id/responsable", async (req, res, next) => {
    try {
        await ProyectoController.agregarResponsable(req, res);
    } catch (error) {
        next(error);
    }
});

// agregar desarrollador a proyecto
ProyectoRouter.put("/:id/desarrollador", async (req, res, next) => {
    try {
        await ProyectoController.agregarDesarrollador(req, res);
    } catch (error) {
        next(error);
    }
});

// agregar tarea a proyecto
ProyectoRouter.put("/:id/tarea", async (req, res, next) => {
    try {
        await ProyectoController.agregarTareaProyecto(req, res);
    } catch (error) {
        next(error);
    }
});

// obtener tareas de proyecto
ProyectoRouter.get("/:id/tarea", async (req, res, next) => {
    try {
        await ProyectoController.obtenerTareas(req, res);
    } catch (error) {
        next(error);
    }
});

// Desarrolladores Por proyecto
ProyectoRouter.get("/:id/desarrolladores", async (req, res, next) => {
    try {
        await ProyectoController.obtenerDesarrolladores(req, res);
    } catch (error) {
        next(error);
    }
});

// Tareas sin asignar
ProyectoRouter.get("/tareas-sin-asignar", async (req, res, next) => {
    try {
        await ProyectoController.tareasSinAsignar(req, res);
    } catch (error) {
        next(error);
    }
});

// Desarrolladores sin asignar
ProyectoRouter.get("/desarrolladores-sin-asignar", async (req, res, next) => {
    try {
        await ProyectoController.desarrolladoresSinAsignar(req, res);
    } catch (error) {
        next(error);
    }
});

export default ProyectoRouter;
