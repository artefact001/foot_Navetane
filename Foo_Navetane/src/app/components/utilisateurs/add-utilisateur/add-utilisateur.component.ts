import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UtilisateurService } from '../../../services/utilisateur.service'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-add-utilisateur',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-utilisateur.component.html'
})
export class AddUtilisateurComponent {
  utilisateurForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {
    this.utilisateurForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  onSubmit () {
    if (this.utilisateurForm.valid) {
      this.utilisateurService
        .addUtilisateur(this.utilisateurForm.value)
        .subscribe(() => {
          this.router.navigate(['/utilisateurs'])
        })
    }
  }
}
