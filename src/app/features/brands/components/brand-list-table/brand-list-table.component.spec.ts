import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListTableComponent } from './brand-list-table.component';

describe('BrandListTableComponent', () => {
  let component: BrandListTableComponent;
  let fixture: ComponentFixture<BrandListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
