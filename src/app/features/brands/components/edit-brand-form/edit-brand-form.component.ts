import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BrandsControllerService } from '../../../../shared/services/api';
import { Router } from '@angular/router';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-edit-brand-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './edit-brand-form.component.html',
  styleUrl: './edit-brand-form.component.scss'
})
export class EditBrandFormComponent implements OnInit{
  @Input() brandId!: number;

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private brandsService: BrandsService,
    private brandsControllerService: BrandsControllerService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getBrand();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  getBrand() {
    this.brandsService.getBrandById({ id: this.brandId}).subscribe((brand) => {
      console.log(
        '~ EditBrandFormComponent ~ this.brandsService.getBrandById ~ brand:',
        brand
      );
      this.form.patchValue({
        name: brand.name,
      });
    });
  }

  edit() {
    this.brandsControllerService.updateBrandById({
      id: this.brandId,
      updateBrandRequest: {
        name: this.form.value.name,
      },
    }).subscribe({
      complete: () => {
        this.formMessage = 'Brand updated succesfully';
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management', 'brands']);
        }, 2000);
      },
    });
  }

  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill the form correctly';
      return;
    }

    this.edit();
  }
  
}
