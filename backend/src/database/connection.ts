import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "1234",
  database: "industrial_control",
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err));