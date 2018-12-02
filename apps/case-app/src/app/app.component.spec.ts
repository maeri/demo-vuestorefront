import { MockCoreService } from '../../../../libs/services/src/lib/mocks';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { MockComponent } from 'ng2-mock-component';
import { CoreService } from '@playground/services';

describe('AppComponent', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					AppComponent,
					MockComponent({
						selector: 'playground-add-to-base-component'
					}),
					MockComponent({
						selector: 'playground-add-to-shopping'
					})
				]
			}).compileComponents();
		})
	);

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'case-app'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('case-app');
	});

	it('should render title in a h1 tag', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to case-app!');
	});
});
