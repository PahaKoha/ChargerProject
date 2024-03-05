import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStatisticsComponent } from './main-statistics.component';

describe('MainStatisticsComponent', () => {
  let component: MainStatisticsComponent;
  let fixture: ComponentFixture<MainStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
