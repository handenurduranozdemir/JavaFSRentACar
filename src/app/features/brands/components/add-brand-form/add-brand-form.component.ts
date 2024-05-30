import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CreateBrandRequestParams, BrandsControllerService} from '../../../../shared/services/api';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-brand-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, RouterModule],
  templateUrl: './add-brand-form.component.html',
  styleUrl: './add-brand-form.component.scss'
})
export class AddBrandFormComponent implements OnInit {
  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandsControllerService,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.createForm();
  }

  createForm() {
    // this.form = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   description: new FormControl('', [Validators.required]),
    //   isActive: new FormControl(true, [Validators.required]),
    // });
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  add() {
    const request: CreateBrandRequestParams= {
      createBrandRequest: {
        name: this.form.value.name,
      },
    };
    this.brandsService.createBrand(request).subscribe({
      next: (response) => {
        // Next: Observable'dan gelen veri yakaladığımız fonksiyon
        console.log(response);
      },
      error: (error) => {
        // Error: Observable'dan gelen hata yakaladığımız fonksiyon
        this.formMessage = error.error.message;
        this.change.markForCheck(); // OnPush olduğu için bir sonraki bir olaya kadar değişikliği algılamaz. Böylece biz manuel olarak değişikliği algılamasını sağlıyoruz.
      },
      complete: () => {
        // Complete: Observable'dan gelen veri akışının tamamlandığını bildiren fonksiyon. Complete çalıştığı taktirde observable'dan gelen veri akışı sona erer.
        this.formMessage = 'Brand added succesfully';
        this.form.reset();
        this.change.markForCheck();

        setTimeout(() => {
          this.router.navigate(['/management', 'brands']);
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
