import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { ProfileService } from './data/services/profile.service';
import { Profile } from './data/interfaces/profile.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCard, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val: Profile[]) => {
    console.log('VAL:', val);
    console.log(Array.isArray(val));

    this.profiles = val;
    })
  }

  protected readonly title = signal('meow-chat');
}
