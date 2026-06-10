import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { switchMap, debounceTime } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../../data/services/profile.service';

@Component({
  selector: 'app-profile-filters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-filters.html',
  styleUrl: './profile-filters.scss',
})
export class ProfileFilters {
  fb = inject(FormBuilder);
  profileService = inject(ProfileService);

  searchForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    stack: ['']
  })

  constructor() {
this.searchForm.valueChanges
.pipe(
  debounceTime(300),
  switchMap(formValue => {
return this.profileService.filterProfiles(formValue as Record<string, any>)
  })
)
.subscribe()
  }
}
