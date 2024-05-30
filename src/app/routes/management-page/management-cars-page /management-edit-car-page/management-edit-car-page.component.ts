import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EditCarFormComponent } from '../../../../features/cars/components/edit-car-form/edit-car-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management-edit-car-page',
  standalone: true,
  imports: [CommonModule, EditCarFormComponent],
  templateUrl: './management-edit-car-page.component.html',
  styleUrl: './management-edit-car-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditCarPageComponent implements OnInit{
  carId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.getCarIdFormRoute();
  }
  getCarIdFormRoute() {
    this.route.params.subscribe((params) => {
      const carId = params['carId'];
      if (!carId) return;

      this.carId = Number(carId);
    });
  }
}
