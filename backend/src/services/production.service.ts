import { pool } from "../database/connection";

export const getProductionSuggestions = async () => {
  const productsQuery = `
    SELECT 
      p.id AS product_id,
      p.name AS product_name,
      p.value AS unit_value,
      rm.quantity,
      prm.required_quantity
    FROM products p
    JOIN product_raw_materials prm ON prm.product_id = p.id
    JOIN raw_materials rm ON rm.id = prm.raw_material_id
  `;

  const { rows } = await pool.query(productsQuery);

  const productionMap: any = {};

  rows.forEach((row) => {
    const {
      product_id,
      product_name,
      unit_value,
      quantity,
      required_quantity,
    } = row;

    const possibleQuantity = Math.floor(
      quantity / required_quantity
    );

    if (!productionMap[product_id]) {
      productionMap[product_id] = {
        product_id,
        product_name,
        unit_value,
        possible_quantity: possibleQuantity,
      };
    } else {
      productionMap[product_id].possible_quantity = Math.min(
        productionMap[product_id].possible_quantity,
        possibleQuantity
      );
    }
  });

  const result = Object.values(productionMap)
    .map((product: any) => ({
      ...product,
      total_value: product.possible_quantity * product.unit_value,
    }))
    .filter((product: any) => product.possible_quantity > 0)
    .sort((a: any, b: any) => b.unit_value - a.unit_value);

  return result;
};