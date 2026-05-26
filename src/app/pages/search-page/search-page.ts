import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileCard } from '../../common-ui/profile-card/profile-card';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class SearchPageComponent {
  profileService = inject(ProfileService);

  profiles: Profile[] = [];

  private cdr = inject(ChangeDetectorRef);

  constructor() {
    this.profileService.getTestAccounts().subscribe((val: Profile[]) => {
      console.log('VAL:', val);
      this.profiles = [...val];
      this.cdr.detectChanges();
    });
  }
}
