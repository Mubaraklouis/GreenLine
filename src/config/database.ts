import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
  username: process.env.POSTGRES_USER || "greenline",
  password: process.env.POSTGRES_PASSWORD || "greenline_secret",
  database: process.env.POSTGRES_DB || "greenline_db",
  synchronize: true,
  logging: process.env.NODE_ENV === "development",
  entities: [],
  migrations: [],
  subscribers: [],
});
