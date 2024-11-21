import { DataSource } from "typeorm";

import SnakeNamingStrategy from "typeorm-naming-strategy";

import { DesarrolladorEntity, EstadoEntity, ProyectoEntity, RolEntity, TareaEntity } from "./entity";

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) ?? 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // logging: true,
  entities: [DesarrolladorEntity, RolEntity, EstadoEntity, TareaEntity, ProyectoEntity],
  namingStrategy: new SnakeNamingStrategy(),
  ssl: {
    rejectUnauthorized: false,
  },
});

export default dataSource;
