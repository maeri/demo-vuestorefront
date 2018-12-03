import { ServicesModule } from './../services.module';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Size } from '../interfaces/size';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: ServicesModule })
export class CoreService {
	get productList(): Product[] {
		const productArray: Product[] = [
			{
				id: 1,
				name: 'trousers',
				color: 'blue',
				size: Size.L,
				currency: 'USD',
				price: 29.99,
				promotion: 1
			},
			{
				id: 2,
				name: 'radiant tee',
				color: 'white',
				size: Size.L,
				currency: 'USD',
				price: 39.99,
				promotion: 0.9
			},
			{
				id: 3,
				name: 'shorts',
				color: 'white',
				size: Size.L,
				currency: 'USD',
				price: 19.99,
				promotion: 0.8
			}
		];

		return productArray;
	}

	calculatePrice(product: Product) {
		if (!product) {
			throw new Error('Product not defined');
		}
		product.price = Math.round(product.price * product.promotion * 100)/100;
	}
}
