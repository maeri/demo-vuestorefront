import { Size } from "./size";

export interface Product {
  id: number;
  name: string;
  color: string;
  size: Size;
  currency: string;
  price: number;
  promotion: number;
}

