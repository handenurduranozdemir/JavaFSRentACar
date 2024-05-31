import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { CommonModule } from '@angular/common';
import { BrandsControllerService, GetAllBrandResponse } from '../../../../shared/services/api';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { BrandsListBaseComponent } from '../brand-list-base/brand-list-base.component';

@Component({
  selector: 'app-brand-list-table',
  standalone: true,
  imports: [CommonModule, TableDirective, ButtonComponent, RouterModule],
  templateUrl: './brand-list-table.component.html',
  styleUrl: './brand-list-table.component.scss'
})
export class BrandListTableComponent extends BrandsListBaseComponent{
  filteredBrands: GetAllBrandResponse[] = [];
  filterValues: { [key: string]: string } = {}; 
constructor(
  brandsService: BrandsService,
  change: ChangeDetectorRef,
  private brandControllerService: BrandsControllerService
) {
  // Alt sınıfta bir constructor tanımlandığında super() ile üst sınıfın constructor'ı da çağrılmalıdır.

  super(brandsService, change); // super ana sınıfın constructor'ını çağırır.
}

deleteBrand(id: number) {
  this.brandControllerService.deleteBrandById({ id }).subscribe({
    complete: () => {
      this.getBrandsList();
    },
  });
}

applyFilter(event: Event, column: keyof GetAllBrandResponse) {
  const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
  this.filterValues[column as string] = filterValue;
  this.filteredBrands = this.brands.filter(brand =>
    Object.keys(this.filterValues).every(key => 
      brand[key as keyof GetAllBrandResponse]?.toString().toLowerCase().includes(this.filterValues[key])
    )
  );
  this.change.markForCheck();
}

getColumnValue(brand: GetAllBrandResponse, column: keyof GetAllBrandResponse): any {
  return brand[column];
}

trackById(index: number, brand: GetAllBrandResponse) {
  return brand.id;
}
}
