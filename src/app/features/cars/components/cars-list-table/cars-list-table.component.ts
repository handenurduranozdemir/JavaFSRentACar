import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { CarsListBaseComponent } from '../cars-list-base/cars-list-base.component';
import { CarsControllerService } from '../../../../shared/services/api';

@Component({
  selector: 'app-cars-list-table',
  standalone: true,
  imports: [TableDirective, CommonModule, ButtonComponent, RouterModule],
  templateUrl: './cars-list-table.component.html',
  styleUrl: './cars-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListTableComponent extends CarsListBaseComponent{
  constructor(
    carsService: CarsControllerService,
    change: ChangeDetectorRef,
    private carControllerService: CarsControllerService,
  ) { super(carsService,change)}

  deleteCar(id: number) {
    this.carControllerService.deleteCarById({ id }).subscribe({ 
      complete: () => {
        this.getcarsList();
      },
    });
  }
}
