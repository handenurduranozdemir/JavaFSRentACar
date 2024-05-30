import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEditModelPageComponent } from './management-edit-model-page.component';

describe('ManagementEditModelPageComponent', () => {
  let component: ManagementEditModelPageComponent;
  let fixture: ComponentFixture<ManagementEditModelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementEditModelPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementEditModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
