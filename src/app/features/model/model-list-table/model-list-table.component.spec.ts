import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelListTableComponent } from './model-list-table.component';

describe('ModelListTableComponent', () => {
  let component: ModelListTableComponent;
  let fixture: ComponentFixture<ModelListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
