import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Router, RouterModule} from '@angular/router';
import { CreateModelRequestParams, ModelsControllerService } from '../../../shared/services/api';

@Component({
  selector: 'app-add-model-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, RouterModule],
  templateUrl: './add-model-form.component.html',
  styleUrl: './add-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddModelFormComponent implements OnInit{
  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private modelsService: ModelsControllerService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      brandId: ['', [Validators.required]],
      fuelId: ['', [Validators.required]],
      transmissionId: ['', [Validators.required]], 
    });
  }

  add() {
    const request: CreateModelRequestParams = {
      createModelRequest: {
        name: this.form.value.name,
        brandId: this.form.value.brandId,
        fuelId: this.form.value.fuelId,
        transmissionId: this.form.value.transmissionId,
      },
    };
    this.modelsService.createModel(request).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.formMessage = error.error.message;
        this.change.markForCheck();
      },
      complete: () => {
        this.formMessage = 'Model added succesfully';
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management', 'models']);
        }, 2000);
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill all required fields';
      return;
    }
    this.add();
  }
}
