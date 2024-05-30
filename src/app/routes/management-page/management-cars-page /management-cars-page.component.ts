import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarsListTableComponent } from '../../../features/cars/components/cars-list-table/cars-list-table.component';

@Component({
    selector: 'app-management-cars-page',
    standalone: true,
    templateUrl: './management-cars-page.component.html',
    styleUrl: './management-cars-page.component.scss',
    imports: [ButtonComponent, CommonModule, CarsListTableComponent, RouterModule],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class ManagementCarsPageComponent {

}
