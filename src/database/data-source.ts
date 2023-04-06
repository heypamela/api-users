import dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: ["src/database/models/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
});
