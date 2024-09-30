import { Component } from '@angular/core'
import { NavbarComponent } from '../navbar/navbar.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css', 
})
export class AccueilComponent {}
