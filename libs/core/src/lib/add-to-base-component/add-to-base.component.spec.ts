import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToBaseComponent } from './add-to-base.component';
import { CoreService, MockCoreService } from '@playground/services';

describe('BaseComponent', () => {
	let component: AddToBaseComponent;
	let fixture: ComponentFixture<AddToBaseComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ AddToBaseComponent ],
				providers: [
					{
						provide: CoreService,
						useClass: MockCoreService
					}
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AddToBaseComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
