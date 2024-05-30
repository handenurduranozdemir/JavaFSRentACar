import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';
import { TableDirective } from '../../../shared/directives/table.directive';
import { RouterModule } from '@angular/router';
import { ModelListBaseComponent } from '../model-list-base/model-list-base.component';
import { ModelsControllerService } from '../../../shared/services/api';

@Component({
    selector: 'app-model-list-table',
    standalone: true,
    templateUrl: './model-list-table.component.html',
    styleUrl: './model-list-table.component.scss',
    imports: [ButtonComponent, CommonModule, TableDirective, RouterModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelListTableComponent extends ModelListBaseComponent{
  constructor(
    modelsService: ModelsControllerService,
    change: ChangeDetectorRef,
    private modelsControllerService: ModelsControllerService
  ) {
    super(modelsService, change);
  }
  deleteModel(id: number) {
    this.modelsControllerService.deleteModelById({ id }).subscribe({
      complete: () => {
        this.getModelsList();
      },
    });
  }
}
