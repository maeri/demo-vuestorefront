import { ServicesModule } from './../services.module';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Size } from '../interfaces/size';

@Injectable({providedIn: ServicesModule})
export class CoreService {

  get productList(): Product[] {
    const productArray: Product[] = [
      {
        name: 'trousers',
        color: 'blue',
        size: Size.L,
        currency: "USD",
        price: 29.99,
        promotion: 1
      },
      {
        name: 'radiant tee',
        color: 'white',
        size: Size.L,
        currency: "EUR",
        price: 39.99,
        promotion: 0.9
      },
      {
        name: 'shorts',
        color: 'white',
        size: Size.L,
        currency: "EUR",
        price: 19.99,
        promotion: 0.8
      },
    ];

    return productArray;
  }
}
