import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators  , ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
// import { UtilisateurService, utilisateurService } from '../../../services/utilisateur.service';
import { CommonModule } from '@angular/common'
import { utilisateurService } from '../../../services/utilisateur.service'
@Component({
  selector: 'app-add-utilisateur',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-utilisateur.component.html',
   styleUrls: ['./add-utilisateur.component.css']
})


export class AddUtilisateurComponent {
  utilisateurForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private utilisateurService: utilisateurService,
    private router: Router
  ) {
    this.utilisateurForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
      Adresse: ['', Validators.required],
      Téléphone: ['', Validators.required]
    })
  }
  
  onSubmit () {
    if (this.utilisateurForm.valid) {
      this.utilisateurService
        .addUtilisateur(this.utilisateurForm.value).subscribe(response => {
        
            console.log('Utilisateur crée avec sucee:', response)
            this.router.navigate(['/utilisateurs'])
          },error => {
            console.error('erreur lors de la création du user:', error)
          }
        )
    }
  }
}
