import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModelListBaseComponent } from '../model-list-base/model-list-base.component';
import { BrandsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllModelResponse, GetAllTransmissionResponse, ModelsControllerService, TransmissionsControllerService } from '../../../shared/services/api';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-models-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './models-card-list.component.html',
  styleUrl: './models-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsCardListComponent extends ModelListBaseComponent implements OnInit{
  @Input() brandId: number | null = null;

  
  
  get filteredModels(): GetAllModelResponse[] {
    let newList: GetAllModelResponse[] = this.models;

    if (this.brandId)
      newList = newList.filter((model) => model.brandId === this.brandId);

    return newList;
  }

  constructor(
    private modelControllerService: ModelsControllerService,
    private fuelsService: FuelsControllerService,
    private brandsService: BrandsControllerService,
    private transmissionsService: TransmissionsControllerService,
    change: ChangeDetectorRef
  ) {
    super(modelControllerService, change);
  }

  override ngOnInit(): void {
      super.ngOnInit();
      this.getModelRelations();
  }

  brands: GetAllBrandResponse[] = [];
  fuels: GetAllFuelResponse[] = [];
  transmissions: GetAllTransmissionResponse[] = [];

  getModelRelations(): void{
    //Brand
    this.brandsService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
      this.change.markForCheck();
    });

    // Fuel
    this.fuelsService.getAllFuels().subscribe((fuels) => {
      this.fuels = fuels;
      this.change.markForCheck();
    });

    // Transmission
    this.transmissionsService
      .getAllTransmissions()
      .subscribe((transmissions) => {
        this.transmissions = transmissions;
        this.change.markForCheck();
      });
  }

  getModelCardText(model: GetAllModelResponse): string {
    return `Brand: ${
      this.brands.find((brand) => brand.id === model.brandId)?.name 
    }, Fuel: ${
      this.fuels.find((fuel) => fuel.id ===model.fuelId)?.name
    }, Transmission: ${
      this.transmissions.find((transmission) => transmission.id === model.transmissionId)?.name
    }`;
  }
}
