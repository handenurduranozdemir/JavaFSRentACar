import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCreateModelPageComponent } from './management-create-model-page.component';

describe('ManagementCreateModelPageComponent', () => {
  let component: ManagementCreateModelPageComponent;
  let fixture: ComponentFixture<ManagementCreateModelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementCreateModelPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementCreateModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
