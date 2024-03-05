import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCHComponent } from './test-ch.component';

describe('TestCHComponent', () => {
  let component: TestCHComponent;
  let fixture: ComponentFixture<TestCHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
