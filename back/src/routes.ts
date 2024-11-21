import { Ruta } from "./model";
import { DesarrolladorRouter, RolRouter } from "./router";

export const ROUTES: Ruta[] = [
  {
    path: "/desarrolladores",
    router: DesarrolladorRouter,
  },
  {
    path: "/roles",
    router: RolRouter,
  },
];
