import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarFormComponent } from './edit-car-form.component';

describe('EditCarFormComponent', () => {
  let component: EditCarFormComponent;
  let fixture: ComponentFixture<EditCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCarFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
