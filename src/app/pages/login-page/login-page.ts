import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { AuthService } from '../../auth/auth';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPageComponent {

  authService = inject(AuthService);
   router = inject(Router);

   isPasswordVisible = signal<boolean>(false);

  form = new FormGroup({  
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required)
  });

  onSubmit() {
    if (this.form.valid) {
      //@ts-ignore
      this.authService.login(this.form.value).subscribe (res => {
         this.router.navigate(['']);
          console.log(res)
    })
  }
}
}

