import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChargingComponent } from './main-charging.component';

describe('MainChargingComponent', () => {
  let component: MainChargingComponent;
  let fixture: ComponentFixture<MainChargingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainChargingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
