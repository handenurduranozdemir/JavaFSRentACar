import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CarsControllerService, GetAllCarResponse } from '../../../../shared/services/api';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './cars-list-base.component.html',
  styleUrl: './cars-list-base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsListBaseComponent {
  @Input() initialSelectedCarId: number | null = null;
  @Output() selectCar = new EventEmitter<GetAllCarResponse | null>();

  cars !: GetAllCarResponse[];
  selectedCar: GetAllCarResponse | null = null;
  initialSelectedCarIndex: number | null = null;

  constructor(
    protected carsService: CarsControllerService,
    protected change: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getcarsList()
  }
  getcarsList() {
    this.carsService.getAllCars().subscribe((response) => {
      this.cars = response;

      if(this.initialSelectedCarId) {
        this.selectedCar = this.cars.find(
          (car) => car.id === this.initialSelectedCarId) ?? null;
      }
      this.change.markForCheck();
    });
  }

  onSelectCar(car: GetAllCarResponse) {
    this.selectedCar = this.selectedCar?.id !== car.id ? car : null;
    this.selectCar.emit(this.selectedCar);
  }

}
