import { Component } from '@angular/core';
import { SvgIcon } from "../svg-icon/svg-icon";
import { NgFor, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SubscriberCard } from "./subscriber-card/subscriber-card";
import { ProfileService } from '../../data/services/profile.service';
import { inject } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { WritableSignal } from '@angular/core';
import { Pageble } from '../../data/interfaces/pageble.interface';
import { firstValueFrom, Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { ImgUrlPipe } from '../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIcon, NgFor, RouterLink, SubscriberCard, AsyncPipe, ImgUrlPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  profileService: ProfileService = inject(ProfileService);

  subscribers$: Observable<Profile[]> = this.profileService.getSubscribersShortList();
  me = this.profileService.me;
  menuItems = [{
    label: 'Home',
    icon: 'home',
    link: '',
  },
  {
    label: 'Chats',
    icon: 'chats',
    link: 'chats',
  },
  {
    label: 'Search',
    icon: 'search',
    link: 'search',
  },

];

ngOnInit() {
  firstValueFrom(this.profileService.getMe())
}
}

