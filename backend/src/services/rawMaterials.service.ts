import { pool } from "../database/connection"; 

export async function getAllRawMaterials() {
  const result = await pool.query(
    "SELECT * FROM raw_materials ORDER BY id ASC"
  );

  return result.rows;
}

export async function createRawMaterial(data: {
  name: string;
  quantity: number;
}) {
  const result = await pool.query(
    "INSERT INTO raw_materials (name, quantity) VALUES ($1, $2) RETURNING *",
    [data.name, data.quantity]
  );

  return result.rows[0];
}

export async function deleteMaterial(id: number) {
  const result = await pool.query(
    "DELETE FROM raw_materials WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0];
}

export async function updateMaterial(
  id: number,
  data: { name: string; quantity: number }
) {
  const result = await pool.query(
    "UPDATE raw_materials SET name = $1, quantity = $2 WHERE id = $3 RETURNING *",
    [data.name, data.quantity, id]
  );

  return result.rows[0];
}