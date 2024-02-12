import { Pool } from "pg";

export const pool = new Pool({
  user: "admin",
  host: "db",
  database: "rinha",
  password: "123",
  port: 5432,
});
