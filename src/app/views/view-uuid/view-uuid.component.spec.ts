import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUuidComponent } from './view-uuid.component';

describe('ViewUuidComponent', () => {
  let component: ViewUuidComponent;
  let fixture: ComponentFixture<ViewUuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUuidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
