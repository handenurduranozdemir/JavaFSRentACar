import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelListBaseComponent } from './model-list-base.component';

describe('ModelListBaseComponent', () => {
  let component: ModelListBaseComponent;
  let fixture: ComponentFixture<ModelListBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelListBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
