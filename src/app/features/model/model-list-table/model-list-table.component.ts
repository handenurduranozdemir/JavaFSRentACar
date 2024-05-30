import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';
import { TableDirective } from '../../../shared/directives/table.directive';
import { RouterModule } from '@angular/router';
import { ModelListBaseComponent } from '../model-list-base/model-list-base.component';
import { ModelsControllerService, GetAllModelResponse } from '../../../shared/services/api';

@Component({
  selector: 'app-model-list-table',
  standalone: true,
  templateUrl: './model-list-table.component.html',
  styleUrls: ['./model-list-table.component.scss'],
  imports: [ButtonComponent, CommonModule, TableDirective, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelListTableComponent extends ModelListBaseComponent implements OnInit {
  filteredModels: GetAllModelResponse[] = [];
  filterValues: { [key: string]: string } = {}; // Store filter values for each column

  constructor(
    modelsService: ModelsControllerService,
    change: ChangeDetectorRef,
    private modelsControllerService: ModelsControllerService
  ) {
    super(modelsService, change);
    this.filteredModels = []; // Initialize the filteredModels array
  }

  override ngOnInit() {
    this.getModelsList();
  }

  override getModelsList() {
    this.modelService.getAllModels().subscribe((response) => {
      this.models = response;
      this.filteredModels = this.models; // Initialize the filteredModels array with the models array
      this.change.markForCheck();
    });
  }

  deleteModel(id: number) {
    this.modelsControllerService.deleteModelById({ id }).subscribe({
      complete: () => {
        this.getModelsList();
      },
    });
  }

  applyFilter(event: Event, column: keyof GetAllModelResponse) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filterValues[column as string] = filterValue;
    this.filteredModels = this.models.filter(model =>
      Object.keys(this.filterValues).every(key => 
        model[key as keyof GetAllModelResponse]?.toString().toLowerCase().includes(this.filterValues[key])
      )
    );
    this.change.markForCheck();
  }

  getColumnValue(model: GetAllModelResponse, column: keyof GetAllModelResponse): any {
    return model[column];
  }

  trackById(index: number, model: GetAllModelResponse) {
    return model.id;
  }
}
