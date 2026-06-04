import { Component } from '@angular/core';
import { ProfileHeader } from "../../common-ui/profile-header/profile-header";
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { ProfileService } from '../../data/services/profile.service';
import { ActivatedRoute } from '@angular/router';
import {inject} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { SvgIcon } from "../../common-ui/svg-icon/svg-icon";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileHeader, AsyncPipe, SvgIcon, RouterLink],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})

export class ProfilePageComponent {
  profileService = inject(ProfileService);
  route = inject(ActivatedRoute);

  me$ = toObservable(this.profileService.me);

  profile$ = this.route.params
  .pipe(
    switchMap(({id}) => {
      if (id === 'me') return this.me$
      return this.profileService.getAccount(id)
    })
  );
}