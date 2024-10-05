import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators  , ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { UtilisateurService } from '../../../services/utilisateur.service'
import { CommonModule } from '@angular/common'
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
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {
    this.utilisateurForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  onSubmit () {
    if (this.utilisateurForm.valid) {
      this.utilisateurService
        .addUtilisateur(this.utilisateurForm.value)
        .subscribe(
          response => {
            console.log('User created:', response)
            this.router.navigate(['/utilisateurs'])
          },
          error => {
            console.error('Error creating user:', error)
          }
        )
    }
  }
}
