import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-user',
  imports: [],
  templateUrl: './menu-bar-user.component.html',
  styleUrl: './menu-bar-user.component.css'
})
export class MenuBarUserComponent {
  @Input() photoUser:string = ''
}
