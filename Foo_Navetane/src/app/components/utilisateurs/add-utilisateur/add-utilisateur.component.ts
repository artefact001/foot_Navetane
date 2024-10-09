import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { utilisateurService } from '../../services/utilisateur.service';
import {  CommonModule } from '@angular/common';
import { UtilisateurService } from '../../../services/utilisateur.service';
@Component({
  selector: 'app-add-utilisateur',
  standalone : true,
  imports : [ ReactiveFormsModule , CommonModule],
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.css']
})
export class AddUtilisateurComponent {
  utilisateurForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {
    // Initialiser le formulaire
    this.utilisateurForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]

    });
  }

  // Méthode de soumission du formulaire
 onSubmit() {
  if (this.utilisateurForm.valid) {
    this.utilisateurService.addUtilisateur(this.utilisateurForm.value).subscribe(
      (response) => {
        console.log('Utilisateur créé avec succès:', response);
        this.router.navigate(['/utilisateurs']);
      },
      (error) => {
        this.handleErrors(error);
        console.error('Erreur lors de la création de l\'utilisateur:', error);
      }
    );
  }
}

// Méthode de gestion des erreurs
handleErrors(err: any): void {
  const errors = err.error.errors ? Object.values(err.error.errors) : [err.error.message];
  errors.forEach(error => {
    // Utilise une alerte ou une notification comme Toastr pour afficher les erreurs
    alert(error);
  });
}

}