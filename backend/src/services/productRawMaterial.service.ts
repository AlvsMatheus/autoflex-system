import { pool } from "../database/connection";

export async function getAllProductRawMaterials() {
  const result = await pool.query(
    "SELECT * FROM product_raw_materials ORDER BY id ASC"
  );

  return result.rows;
}

export async function createProductRawMaterial(data: {
  product_id: number;
  raw_material_id: number;
  required_quantity: number;
}) {
  const result = await pool.query(
    `INSERT INTO product_raw_materials 
     (product_id, raw_material_id, required_quantity) 
     VALUES ($1, $2, $3) 
     RETURNING *`,
    [data.product_id, data.raw_material_id, data.required_quantity]
  );

  return result.rows[0];
}

export async function deleteProductRawMaterial(id: number) {
  const result = await pool.query(
    "DELETE FROM product_raw_materials WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0];
}