import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';
import { ModelListTableComponent } from '../../../features/model/model-list-table/model-list-table.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-management-models-page',
    standalone: true,
    templateUrl: './management-models-page.component.html',
    styleUrl: './management-models-page.component.scss',
    imports: [ButtonComponent, CommonModule, ModelListTableComponent, RouterModule],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class ManagementModelsPageComponent {

}
