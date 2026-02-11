import { rawMaterials, RawMaterial } from "../mocks/rawMaterials";

export function getAllRawMaterials() {
  return rawMaterials;
}

export function createRawMaterial(
  data: Omit<RawMaterial, "id">
) {
  const newMaterial: RawMaterial = {
    id: rawMaterials.length + 1,
    ...data,
  };

  rawMaterials.push(newMaterial);
  return newMaterial;
}

export function deleteMaterial(id: number) {
    const index = rawMaterials.findIndex(material => material.id === id)
    
    if (index === -1) {
        return null
    }

    const deletedMaterial = rawMaterials.splice(index, 1);
    return deletedMaterial[0]
}

export function updateMaterial(
  id: number,
  data: Omit<RawMaterial, "id">
) {
  const materialIndex = rawMaterials.findIndex((material) => material.id === id);

  if (materialIndex === -1) {
    return null;
  }

  const updatedMaterial: RawMaterial = {
    id,
    ...data,
  };

  rawMaterials[materialIndex] = updatedMaterial;

  return updatedMaterial;
}
