import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { CommonModule } from '@angular/common';
import { BrandsControllerService } from '../../../../shared/services/api';
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
}
