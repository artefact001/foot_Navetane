import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UtilisateurService } from '../../services/utilisateur.service'
import { ReactiveFormsModule } from '@angular/forms' // Ensure ReactiveFormsModule is imported

@Component({
  standalone: true,
  imports: [ReactiveFormsModule], // Importing ReactiveFormsModule for form handling
  selector: 'ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AddUtilisateurComponent {
  utilisateurForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {
    // Initialize form with validation
    this.utilisateurForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  // Method to handle form submission
  onSubmit () {
    if (this.utilisateurForm.valid) {
      this.utilisateurService
        .addUtilisateur(this.utilisateurForm.value)
        .subscribe(
          response => {
            console.log('Utilisateur créé avec succès:', response)
            this.router.navigate(['/utilisateurs']) // Redirect after successful creation
          },
          error => {
            console.error("Erreur lors de la création de l'utilisateur:", error)
          }
        )
    } else {
      console.warn('Formulaire invalide')
    }
  }
}
