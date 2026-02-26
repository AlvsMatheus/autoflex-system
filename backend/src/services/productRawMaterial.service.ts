import { pool } from "../database/connection";

export async function getAllProductRawMaterials() {
  const result = await pool.query(`
    SELECT 
      prm.id,
      prm.required_quantity,

      p.id AS product_id,
      p.name AS product_name,

      rm.id AS raw_material_id,
      rm.name AS raw_material_name

    FROM product_raw_materials prm
    JOIN products p ON p.id = prm.product_id
    JOIN raw_materials rm ON rm.id = prm.raw_material_id
    ORDER BY prm.id ASC
  `);

  return result.rows.map(row => ({
    id: row.id,
    required_quantity: row.required_quantity,
    product: {
      id: row.product_id,
      name: row.product_name,
    },
    raw_material: {
      id: row.raw_material_id,
      name: row.raw_material_name,
    },
  }));
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