import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsListMenuComponent } from './cars-list-menu.component';

describe('CarListMenuComponent', () => {
  let component: CarsListMenuComponent;
  let fixture: ComponentFixture<CarsListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsListMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarsListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
