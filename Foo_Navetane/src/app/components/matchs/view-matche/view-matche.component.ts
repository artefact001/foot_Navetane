// / src/app/components/match-detail/match-detail.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatchService } from '../../../services/matche.service';

@Component({
  selector: 'app-match-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="matche">
      <h2>{{ matche.equipe_local }} vs {{ matche.equipe_visiteur }}</h2>
      <p>Date: {{ matche.date_matche | date }}</p>
      <p>Score: {{ matche.score_local }} - {{ matche.score_visiteur }}</p>
      <p>Statut: {{ matche.statut }}</p>
    </div>
  `
})
export class MatcheViewComponent implements OnInit {
  match: any;

  constructor(
    private route: inject(Router)
    private matcheService: inject(MatchService)
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.matcheService.getMatcheById(id).subscribe(
      matche => this.matche = matche,
      // error => console.error('Erreur lors de la récupération du match', error)
    );
  }
}