import { Component } from '@angular/core';
import { MenuBarItemComponent } from './menu-bar-item/menu-bar-item.component';
import { MenuBarUserComponent } from './menu-bar-user/menu-bar-user.component';
@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [ MenuBarItemComponent, MenuBarUserComponent ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}
