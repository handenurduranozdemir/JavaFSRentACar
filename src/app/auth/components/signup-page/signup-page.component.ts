import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeLayoutComponent],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent implements OnInit{
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        name: [null, [Validators.required]],
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required, this.confirmationValidate]],
      })
  }

  confirmationValidate = (control: FormControl): { [s: string]: boolean} => {
    if(!control.value) {
      return {required: true};
    } else if (control.value !== this.signupForm.controls['password'].value) {
      return {confirm: true, error: true};
    }
    return {};
  }

  signup() {
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe((res) => {
      console.log(res);
    })
  }
}
