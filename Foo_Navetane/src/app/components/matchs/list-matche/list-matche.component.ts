// src/app/components/match-list/match-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Liste des matchs</h2>
    <ul>
      @for (match of matches; track match.id) {
        <li>
          <a [routerLink]="['/match', match.id]">
            {{ match.equipe_local }} vs {{ match.equipe_visiteur }}
            ({{ match.date_matche | date }})
          </a>
        </li>
      }
    </ul>
  `
})
export class MatchListComponent implements OnInit {
  matches: any[] = [];

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      matches => this.matches = matches,
      error => console.error('Erreur lors de la récupération des matchs', error)
    );
  }
}