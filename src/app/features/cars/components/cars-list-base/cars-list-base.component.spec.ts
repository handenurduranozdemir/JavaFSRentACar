import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListBaseComponent } from './cars-list-base.component';

describe('CarsListBaseComponent', () => {
  let component: CarsListBaseComponent;
  let fixture: ComponentFixture<CarsListBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsListBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
