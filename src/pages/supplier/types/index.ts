import { Product } from "../../Products/types";

 
  export interface GetProductsResponse {
    count: number;
    products: Product[];
  }

  export interface SupplierHomeProps {
    products: Product[];
    onAddMoreProducts: () => void;
  }