import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModelFormComponent } from './edit-model-form.component';

describe('EditModelFormComponent', () => {
  let component: EditModelFormComponent;
  let fixture: ComponentFixture<EditModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
