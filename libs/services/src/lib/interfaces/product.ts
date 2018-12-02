import { Size } from "./size";

export interface Product {
  name: string;
  color: string;
  size: Size;
  currency: string;
  price: number;
  promotion: number;
}

