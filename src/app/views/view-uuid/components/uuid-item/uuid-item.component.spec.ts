import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UuidItemComponent } from './uuid-item.component';

describe('UuidItemComponent', () => {
  let component: UuidItemComponent;
  let fixture: ComponentFixture<UuidItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UuidItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UuidItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
