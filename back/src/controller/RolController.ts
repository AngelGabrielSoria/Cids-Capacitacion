import { Request, Response } from "express";

import { RolService } from "../service";

const obtenerRoles = async (req: Request, res: Response): Promise<Response> => {
  try {
    const roles = await RolService.obtenerRoles();
    return res.json(roles);
  } catch (error) {
    throw error;
  }
};

export const RolController = {
  obtenerRoles,
};
