import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEditCarPageComponent } from './management-edit-car-page.component';

describe('ManagementEditCarPageComponent', () => {
  let component: ManagementEditCarPageComponent;
  let fixture: ComponentFixture<ManagementEditCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementEditCarPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementEditCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
