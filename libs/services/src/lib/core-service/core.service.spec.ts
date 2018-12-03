import { Product } from './../interfaces/product';
import { TestBed, inject } from '@angular/core/testing';
import { CoreService } from './core.service';
import { Size } from '../interfaces/size';

describe('CoreService', () => {
	let service: CoreService;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ CoreService ]
		});
		service = TestBed.get(CoreService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
  });
  
  it('should return 3 elements', () => {
		expect(service.productList.length).toBe(3);
  });
  
  it('should calculate promotion', () => {
    //given
    const product: Product = {
      id: 3,
      name: 'shorts',
      color: 'white',
      size: Size.L,
      currency: 'USD',
      price: 19.99,
      promotion: 0.8
    };

    //when
    service.calculatePrice(product);

    //then
		expect(product.price).toBe(15.99);
  });


  
});
