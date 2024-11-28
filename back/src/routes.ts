import { Ruta } from "./model";
import { DesarrolladorRouter, RolRouter, TareaRouter, ProyectoRouter, EstadoRouter } from "./router";

export const ROUTES: Ruta[] = [
  {
    path: "/desarrolladores",
    router: DesarrolladorRouter,
  },
  {
    path: "/roles",
    router: RolRouter,
  },
  {
    path: "/tareas",
    router: TareaRouter
  },
  {
    path: "/proyectos",
    router: ProyectoRouter
  },
  {
    path: "/estados",
    router: EstadoRouter
  }

];
