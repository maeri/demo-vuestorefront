import { Component } from '@angular/core';
import { CoreService } from '@playground/services';
import { AddToBaseComponent } from '@playground/core';

@Component({
	selector: 'playground-add-to-shopping',
	templateUrl: './add-to-shopping.component.html',
	styleUrls: [ './add-to-shopping.component.scss' ]
})
export class AddToShoppingComponent extends AddToBaseComponent {
	constructor(coreService: CoreService) {
		super(coreService);
	}
}
