import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CoreService, Product } from '@playground/services';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'playground-add-to-base-component',
	templateUrl: './add-to-base.component.html',
	styleUrls: [ '../core.component.scss' ]
})
export class AddToBaseComponent {
	@Input() products$: Observable<Product[]>;
	@Output() addProduct = new EventEmitter();

	constructor(private coreService: CoreService) {
		this.products$ = of(this.coreService.productList);
	}

	selectProduct(product: Product) {
		console.log(product, this);
		this.addProduct.emit(product); 
	}

	calculateProductPrice(product: Product) {
		this.coreService.calculatePrice(product);
	}
}
