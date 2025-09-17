import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SonyBarComponent } from './components/sony-bar/sony-bar.component';
  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, HomeComponent, SonyBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'playsatation-store-angular';
}
