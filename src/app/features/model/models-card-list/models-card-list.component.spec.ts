import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsCardListComponent } from './models-card-list.component';

describe('ModelsCardListComponent', () => {
  let component: ModelsCardListComponent;
  let fixture: ComponentFixture<ModelsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
