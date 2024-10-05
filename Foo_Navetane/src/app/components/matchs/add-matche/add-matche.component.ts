import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from '../../../services/match.service'

@Component({ 
  selector: 'app-add-matche',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-matche.component.html',
  StyleUrl: './add-matche.component.css'
})
export class AddMatchComponent implements OnInit {
  matcheForm: FormGroup;
  matches: any[] = []; // Assurez-vous d'importer le type correct

  constructor (
    private fb: FormBuilder,
    private matcheService: MatcheService,
    private router: Router
  ) {
    this.matcheForm = this.fb.group({
      equipe1Id: ['', Validators.required],
      equipe2Id: ['', Validators.required],
      date: ['', Validators.required],
      scoreEquipe1: ['', Validators.required],
      scoreEquipe2: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(): void {
    this.matcheService.getMatches().subscribe(data => {
      this.matches = data; // Assurez-vous que le service retourne la liste des matches
    });
  }

  onSubmit(): void {
    if (this.matcheForm.valid) {
      this.matcheService.addMatche(this.matcheForm.value).subscribe(() => {
        this.loadMatches(); // Rechargez la liste des matches après ajout
        this.matcheForm.reset(); // Réinitialiser le formulaire
      });
    }
  }

  viewMatch(id: number): void {
    // Implémentez la logique pour afficher les détails du match
  }

  editMatch(id: number): void {
    // Implémentez la logique pour éditer le match
  }

  deleteMatch(id: number): void {
    // Implémentez la logique pour supprimer le match
  }
}
