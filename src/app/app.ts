import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { ProfileService } from './data/services/profile.service';
import { Profile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
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