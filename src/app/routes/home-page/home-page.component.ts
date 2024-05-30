import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BrandListMenuComponent } from '../../features/brands/components/brands-list-menu/brands-list-menu.component';
import { BrandListItemDto } from '../../features/brands/models/brand-list-item-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsControllerService, GetAllBrandResponse, GetAllCarResponse } from '../../shared/services/api';
import { ModelsCardListComponent } from '../../features/model/models-card-list/models-card-list.component';
import { MenuComponentCopy } from "../../shared/components/menu copy/menu.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        HomeLayoutComponent,
        ButtonComponent,
        BrandListMenuComponent,
        ModelsCardListComponent,
        MenuComponentCopy,
    ]
})
  export class HomePageComponent {
    selectedBrandId: number | null = null;
    selectedCarId: number | null = null;
    carsMenuItems: Array<{
      title: string;
      details: string[];
      link1: { url: string; text: string };
      link2: { url: string; text: string };
    }> = [];

    constructor(
      private router: Router, 
      private route: ActivatedRoute, 
      private carsService: CarsControllerService,
      private change: ChangeDetectorRef
    ) {}

    ngOnInit(): void { // Lifecycle hook // Component ilk oluşturulduğunda çalışır
      this.getSelectedBrandIdFromRoute();
      this.getSelectedCarIdFromRoute();
      this.getCarsList();
     }

     getCarsList() {
      this.carsService.getAllCars().subscribe((response) => {
        this.carsMenuItems = response.map(car => ({
          title: car.modelName!,
          //description: `Model Year: ${car.modelYear}, Daily Price: ${car.dailyPrice}`,
          details: [
            `Transmission: ${car.transmissionName}`,
            `Fuel: ${car.fuelName}`,
            `State: ${car.state}`
          ],
          link1: { url: '#', text: 'Card link' },
          link2: { url: '#', text: 'Another link' }
        }));
        this.change.markForCheck();
      });
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

    getSelectedCarIdFromRoute() {
      this.route.queryParams.subscribe((params) => {
        if (
          params['carId'] &&
          this.selectedCarId !== Number.parseInt(params['carId'])
        )
        this.selectedCarId = Number.parseInt(params['carId']);
      })
    }
    onSelectCar(seletedCar: GetAllCarResponse | null) {
      this.selectedCarId = seletedCar?.id ?? null;

      if (this.selectedCarId !== null)
        this.router.navigate([''], {
      queryParams: {
        carId: this.selectedCarId, 
      },
      });
      else this.router.navigate(['']);
    } 
  }
