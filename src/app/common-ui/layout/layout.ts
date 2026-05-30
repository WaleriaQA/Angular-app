import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { ProfileService } from '../../data/services/profile.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  profileService = inject(ProfileService);

  ngOnInit() {
    console.log('ngOnInit');
    this.profileService.getMe().subscribe(val => {
      console.log(val)
    });
  }
}
