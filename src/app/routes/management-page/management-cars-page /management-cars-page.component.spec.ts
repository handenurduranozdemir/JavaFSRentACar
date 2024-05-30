import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCarsPageComponent } from './management-cars-page.component';

describe('ManagementCarsPageComponent', () => {
  let component: ManagementCarsPageComponent;
  let fixture: ComponentFixture<ManagementCarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementCarsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementCarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
