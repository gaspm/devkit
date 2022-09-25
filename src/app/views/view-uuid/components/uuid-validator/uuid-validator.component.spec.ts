import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuidValidatorComponent } from './uuid-validator.component';

describe('UuidValidatorComponent', () => {
  let component: UuidValidatorComponent;
  let fixture: ComponentFixture<UuidValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UuidValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UuidValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
