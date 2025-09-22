import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { OutdoorComponent } from '../../components/outdoor/outdoor.component';
@Component({
  selector: 'app-home',
  imports: [CardComponent, OutdoorComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
