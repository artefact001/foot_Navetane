import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-list-utilisateur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent {
  // Logique du composant peut être ajoutée ici (comme des données utilisateur à afficher)
}
