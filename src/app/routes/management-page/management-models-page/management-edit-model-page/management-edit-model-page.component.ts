import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EditModelFormComponent } from '../../../../features/model/edit-model-form/edit-model-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management-edit-model-page',
  standalone: true,
  imports: [CommonModule, EditModelFormComponent],
  templateUrl: './management-edit-model-page.component.html',
  styleUrl: './management-edit-model-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditModelPageComponent implements OnInit{
  modelId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.getModelIdFormRoute();
  }
  getModelIdFormRoute() {
    this.route.params.subscribe((params) => {
      const modelId = params['modelId'];
      if (!modelId) return;

      this.modelId = Number(modelId);
    });
  }
}
