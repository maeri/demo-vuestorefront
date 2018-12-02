import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToShoppingComponent } from './add-to-shopping.component';
import { CoreService, MockCoreService } from '@playground/services';

describe('AddToShoppingComponent', () => {
	let component: AddToShoppingComponent;
	let fixture: ComponentFixture<AddToShoppingComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ AddToShoppingComponent ],
				providers: [ { provide: CoreService, useClass: MockCoreService } ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AddToShoppingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
