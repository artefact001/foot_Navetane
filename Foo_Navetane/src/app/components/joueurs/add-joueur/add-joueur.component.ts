import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JoueurService } from '../../../services/joueur.service';
@Component({
  selector: 'app-add-joueur',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-joueur.component.html',
})
export class AddJoueurComponent {
  joueurForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private joueurService: JoueurService,
    private router: Router
  ) {
    this.joueurForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      licenceId: ['', Validators.required],
      age: ['', Validators.required],
      equipeId: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.joueurForm.valid) {
      this.joueurService.addJoueur(this.joueurForm.value).subscribe(() => {
        this.router.navigate(['/joueurs']);
      });
    }
  }
}
