import { Component } from '@angular/core';
import { SvgIcon } from "../svg-icon/svg-icon";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SvgIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {}
