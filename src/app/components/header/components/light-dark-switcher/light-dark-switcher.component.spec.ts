import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDarkSwitcherComponent } from './light-dark-switcher.component';

describe('LightDarkSwitcherComponent', () => {
  let component: LightDarkSwitcherComponent;
  let fixture: ComponentFixture<LightDarkSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightDarkSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightDarkSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
