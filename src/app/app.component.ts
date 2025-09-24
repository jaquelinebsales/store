import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SonyBarComponent } from './components/sony-bar/sony-bar.component';
import { MenuBarServicesComponent } from './components/menu-bar-services/menu-bar-services.component';
  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, HomeComponent, SonyBarComponent, MenuBarServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'playsatation-store-angular';
}
