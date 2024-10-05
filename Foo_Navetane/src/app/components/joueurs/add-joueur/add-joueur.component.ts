import { Component } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms'
import { Router } from '@angular/router'
import { JoueurService } from '../../../services/joueur.service'

// @Component({
//   selector: 'app-add-joueur',
//   standalone: true,
//   imports: [ReactiveFormsModule],
//   templateUrl: './add-joueur.component.html'
// })

@Component({
  selector: 'app-add-joueur',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-joueur.component.html'
})

export class AddJoueurComponent {
  joueurForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private joueurService: JoueurService,
    private router: Router
  ) {
    this.joueurForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numero_licence: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')]
      ], // Validation pour les chiffres uniquement
      date_naissance: ['', Validators.required], // Vous pouvez ajouter une validation pour vérifier que c'est bien une date
      poste: ['', Validators.required], // Nouveau champ pour le poste
      equipe_id: ['', Validators.required] // Relation avec l'équipe
    })
  }

  onSubmit () {
    if (this.joueurForm.valid) {
      this.joueurService.addJoueur(this.joueurForm.value).subscribe(() => {
        this.router.navigate(['/joueurs'])
      })
    }
  }
}
