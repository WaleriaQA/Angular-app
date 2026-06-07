import { Component } from '@angular/core';
import { ProfileHeader } from "../../common-ui/profile-header/profile-header";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../data/services/profile.service';
import { effect } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [ProfileHeader, ReactiveFormsModule],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.scss',
})
export class SettingsPageComponent {
fb = inject(FormBuilder);
profileService = inject(ProfileService);

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: [{value: '', disabled: true}, Validators.required],
    description: [''],
    stack: ['']
  });

  constructor() {
  effect(() => {
    //@ts-ignore
    this.form.patchValue(this.profileService.me())
  })
}
  onSave() {
this.form.markAllAsTouched()
this.form.updateValueAndValidity()

if (this.form.invalid) return

//@ts-ignore

firstValueFrom(this.profileService.patchProfile(this.form.value))
  }
}
