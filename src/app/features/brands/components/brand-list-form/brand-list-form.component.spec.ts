import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListFormComponent } from './brand-list-form.component';

describe('BrandListFormComponent', () => {
  let component: BrandListFormComponent;
  let fixture: ComponentFixture<BrandListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandListFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
