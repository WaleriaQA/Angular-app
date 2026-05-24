import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { Profile } from './data/services/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  profileService = inject(Profile);
  profiles: any =[];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val: any) => {      
      this.profiles = val;
    })
  }

  protected readonly title = signal('meow-chat');
}
