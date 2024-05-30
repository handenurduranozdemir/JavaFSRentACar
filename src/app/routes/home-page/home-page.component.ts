import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BrandListMenuComponent } from '../../features/brands/components/brands-list-menu/brands-list-menu.component';
import { BrandListItemDto } from '../../features/brands/models/brand-list-item-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllBrandResponse } from '../../shared/services/api';
import { ModelsCardListComponent } from '../../features/model/models-card-list/models-card-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    ButtonComponent,
    BrandListMenuComponent,
    ModelsCardListComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
  export class HomePageComponent {
    selectedBrandId: number | null = null;

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void { // Lifecycle hook // Component ilk oluşturulduğunda çalışır
      this.getSelectedBrandIdFromRoute();
     }

    // /brand/1 // Route params
    // ?brandId=1 // Query params

    getSelectedBrandIdFromRoute() {
      this.route.queryParams.subscribe((params) => {
        if (
          params['brandId'] &&
          this.selectedBrandId !== Number.parseInt(params['brandId'])
        )
        this.selectedBrandId = Number.parseInt(params['brandId']);

        // 1 == "1" true
        // 1 === "1" false
      })
    }

    onSelectBrand(seletedBrand: GetAllBrandResponse | null) {
      this.selectedBrandId = seletedBrand?.id ?? null;

      if (this.selectedBrandId !== null)
        this.router.navigate([''], {
      queryParams: {
        brandId: this.selectedBrandId, // ?brandId=1
        // brandId: [1, 2] // ?brandId=1&brandId=2
      },
    });
    else this.router.navigate(['']);
  }
}