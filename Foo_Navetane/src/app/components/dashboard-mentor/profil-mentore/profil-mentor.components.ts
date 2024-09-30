// import { Component, OnInit } from '@angular/core'
// import { FormBuilder, FormGroup } from '@angular/forms'
// import { MentorService } from '../../../services/mentor.service';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profil-mentor.components.html',
//   styleUrls: ['./profil-mentor.components.css']
// })
// export class ProfileComponent implements OnInit {
//   profilForm: FormGroup

//   constructor (private fb: FormBuilder, private MentorService: MentorService
// ) {
//     this.profilForm = this.fb.group({
//       prenom: [''],
//       nom: [''],
//       email: [''],
//       experience: [''],
//       biographie: [''],
//       password: ['']
//     })
//   }

//   ngOnInit (): void {
//     this.loadProfil()
//   }

//   // Charger les informations du profil depuis l'API
//   loadProfil (): void {
//     this.MentorService.getProfil().subscribe(data => {
//       this.profilForm.patchValue({
//         prenom: data.prenom,
//         nom: data.nom,
//         email: data.email,
//         experience: data.experience,
//         biographie: data.biographie
//       })
//     })
//   }

//   // Soumettre le formulaire pour mettre à jour le profil
//   onSubmit (): void {
//     if (this.profilForm.valid) {
//       this.MentorService.updateProfil(this.profilForm.value).subscribe(
//         response => {
//           console.log('Profil mis à jour avec succès', response)
//         },
//         error => {
//           console.error('Erreur lors de la mise à jour du profil', error)
//         }
//       )
//     }
//   }
// }


import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MentorService } from '../../../services/mentor.service'

@Component({
  selector: 'app - sidebar',
  templateUrl: './profil-mentor.components.html',
  styleUrls: ['./profil-mentor.components.css']
})
export class ProfileComponent implements OnInit {
  profilForm: FormGroup
  formations = [] // This should be populated with data from your backend

  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {
    this.profilForm = this.fb.group({
      prenom: ['', [Validators.required, Validators.maxLength(255)]],
      nom: ['', [Validators.required, Validators.maxLength(255)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)]],
      password: ['', [Validators.nullable, Validators.minLength(6)]],
      parcours_academique: [''],
      diplome: [''],
      langue: [''],
      cv: [''],
      experience: [''],
      domaine: [''],
      formation_id: [''],
      photo: [''] // Add this to manage the profile photo
    })

    // Load formations or any necessary data here
    this.loadFormations()
  }

  loadFormations (): void {
    // Fetch formations from your backend service
    // this.formations = ...
  }

  onModifyPhoto (): void {
    // Handle photo modification
  }

  onDeletePhoto (): void {
    this.profilForm.patchValue({ photo: '' })
  }

  onSubmit (): void {
    if (this.profilForm.valid) {
      // Handle form submission
      console.log(this.profilForm.value)
    }
  }

  onCancel (): void {
    // Handle cancellation
  }
}
