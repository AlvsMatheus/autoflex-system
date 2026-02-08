
export type ProductionStatus = "finished" | "progress" | "pending";

export type Production = {
  id: number;
  label: string;
  status: ProductionStatus;
};


    const products: Production[] = [
        {
            id:1,
            label: "Product A",
            status: "finished"
        },
        {
            id:2,
            label: "Product B",
            status: "progress"
        },
        {
            id:3,
            label: "Product C",
            status: "finished"
        },
        {
            id:4,
            label: "Product D",
            status: "pending"
        },
    ]

    

export default {
    products
    
}
    
