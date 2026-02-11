
export type ProductionStatus = "finished" | "progress" | "pending";

export type Production = {
  id: number;
  productId: string;
  requieredQuantity: number,
  status: ProductionStatus;
};


    const products: Production[] = [
        {
            id:1,
            productId: "Product A",
            requieredQuantity: 10,
            status: "finished"
        },
        {
            id:2,
            productId: "Product B",
            requieredQuantity: 10,
            status: "progress"
        },
        {
            id:3,
            productId: "Product C",
            requieredQuantity: 10,
            status: "finished"
        },
        {
            id:4,
            productId: "Product D",
            requieredQuantity: 10,
            status: "pending"
        },
    ]

    

export default {
    products
    
}
    
