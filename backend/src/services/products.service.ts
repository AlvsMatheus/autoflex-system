import { pool } from "../database/connection";

export async function getAllProducts() {
  const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
  return result.rows;
}

export async function createProduct(data: {
  name: string;
  value: number;
}) {
  const result = await pool.query(
    "INSERT INTO products (name, value) VALUES ($1, $2) RETURNING *",
    [data.name, data.value]
  );

  return result.rows[0];
}

export async function deleteProduct(id: number) {
  const result = await pool.query(
    "DELETE FROM products WHERE id = $1 RETURNING *",
    [id]
  );

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
}

export async function updateProduct(
  id: number,
  data: { name: string; value: number }
) {
  const result = await pool.query(
    "UPDATE products SET name = $1, value = $2 WHERE id = $3 RETURNING *",
    [data.name, data.value, id]
  );

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
}