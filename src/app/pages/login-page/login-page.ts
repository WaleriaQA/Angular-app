import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { Auth } from '../../auth/auth';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPageComponent {

  authService = inject(Auth);

  form = new FormGroup({  
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required)
  });

  onSubmit() {
    console.log(this.form.value)

    if (this.form.valid) {
      //@ts-ignore
      this.authService.login(this.form.value).subscribe (res => {
         
          console.log(res)
    })
  }
}
}

