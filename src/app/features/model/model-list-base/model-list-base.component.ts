import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { GetAllModelResponse, ModelsControllerService } from '../../../shared/services/api';

@Component({
  selector: 'app-model-list-base',
  standalone: true,
  imports: [],
  templateUrl: './model-list-base.component.html',
  styleUrl: './model-list-base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelListBaseComponent {
  @Input() initialSelectedModelId: number | null = null;
  @Output() selectModel = new EventEmitter<GetAllModelResponse | null>();

  models!: GetAllModelResponse[];
  selectedModel: GetAllModelResponse | null = null;
  initialSelectedModelIndex: number | null = null;

  constructor(
    private modelService: ModelsControllerService,
    protected change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getModelsList();
  }

  getModelsList() {
    this.modelService.getAllModels().subscribe((response) => {
      this.models = response;

      if(this.initialSelectedModelId) {
        this.selectedModel = this.models.find(
          (model) => model.id === this.initialSelectedModelId
        ) ?? null;
        this.initialSelectedModelIndex = this.models.findIndex(
          (model) => model.id === this.initialSelectedModelId
        );
      }

      this.change.markForCheck();
    });
  }

  onSelectedModel(model: GetAllModelResponse) {
    this.selectedModel = this.selectedModel?.id !== model.id ? model : null;
    this.selectModel.emit(this.selectedModel);
  }
}
