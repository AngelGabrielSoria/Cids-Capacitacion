import { NextFunction, Request, Response, Router } from "express";

import { RolController } from "../controller";

const RolRouter = Router();

RolRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await RolController.obtenerRoles(req, res);
  } catch (error) {
    next(error);
  }
});

export default RolRouter;
