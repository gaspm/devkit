import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUuidValidatorComponent } from './view-uuid-validator.component';

describe('ViewValidatorComponent', () => {
	let component: ViewUuidValidatorComponent;
	let fixture: ComponentFixture<ViewUuidValidatorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ViewUuidValidatorComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ViewUuidValidatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
