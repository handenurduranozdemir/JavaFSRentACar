import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { CarsListBaseComponent } from '../cars-list-base/cars-list-base.component';
import { CarsControllerService, GetAllCarResponse } from '../../../../shared/services/api';

@Component({
  selector: 'app-cars-list-table',
  standalone: true,
  imports: [TableDirective, CommonModule, ButtonComponent, RouterModule],
  templateUrl: './cars-list-table.component.html',
  styleUrls: ['./cars-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListTableComponent extends CarsListBaseComponent implements OnInit {
  filteredCars: GetAllCarResponse[] = [];
  filterValues: { [key: string]: string } = {}; // Store filter values for each column

  constructor(
    carsService: CarsControllerService,
    change: ChangeDetectorRef,
    private carControllerService: CarsControllerService,
  ) {
    super(carsService, change);
    this.filteredCars = []; // Initialize the filteredCars array
  }

  override ngOnInit() {
    this.getcarsList();
  }

  override getcarsList() {
    this.carsService.getAllCars().subscribe((response) => {
      this.cars = response;
      this.filteredCars = this.cars; // Initialize the filteredCars array with the cars array
      this.change.markForCheck();
    });
  }

  deleteCar(id: number) {
    this.carControllerService.deleteCarById({ id }).subscribe({
      complete: () => {
        this.getcarsList();
      },
    });
  }

  applyFilter(event: Event, column: keyof GetAllCarResponse) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filterValues[column as string] = filterValue;
    this.filteredCars = this.cars.filter(car =>
      Object.keys(this.filterValues).every(key => 
        car[key as keyof GetAllCarResponse]?.toString().toLowerCase().includes(this.filterValues[key])
      )
    );
    this.change.markForCheck();
  }

  getColumnValue(car: GetAllCarResponse, column: keyof GetAllCarResponse): any {
    return car[column];
  }

  trackById(index: number, car: GetAllCarResponse) {
    return car.id;
  }
}
