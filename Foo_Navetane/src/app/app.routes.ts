// import { Routes } from '@angular/router'
// import { ListUtilisateurComponent } from './components/utilisateurs/list-utilisateur/list-utilisateur.component'
// import { AddUtilisateurComponent } from './components/utilisateurs/add-utilisateur/add-utilisateur.component'
// import { EditUtilisateurComponent } from './components/utilisateurs/edit-utilisateur/edit-utilisateur.component'
// import { ViewUtilisateurComponent } from './components/utilisateurs/view-utilisateur/view-utilisateur.component'
// import { ListEquipeComponent } from './components/equipes/list-equipe/list-equipe.component'
// import { AddEquipeComponent } from './components/equipes/add-equipe/add-equipe.component'
// import { EditEquipeComponent } from './components/equipes/edit-equipe/edit-equipe.component'
// import { ViewEquipeComponent } from './components/equipes/view-equipe/view-equipe.component'
// // import { ListReclamationComponent } from './components/reclamations/list-reclamation/list-reclamation.component'
// // import { AddReclamationComponent } from './components/reclamations/add-reclamation/add-reclamation.component'
// // import { EditReclamationComponent } from './components/reclamations/edit-reclamation/edit-reclamation.component'
// // import { ViewReclamationComponent } from './components/reclamations/view-reclamation/view-reclamation.component'
// // import { ListStatistiqueComponent } from './components/statistiques/list-statistique/list-statistique.component'
// // import { AddStatistiqueComponent } from './components/statistiques/add-statistique/add-statistique.component'
// // import { EditStatistiqueComponent } from './components/statistiques/edit-statistique/edit-statistique.component'
// // import { ViewStatistiqueComponent } from './components/statistiques/view-statistique/view-statistique.component'
// import { ListPhaseComponent } from './components/phases/list-phase/list-phase.component'
// import { AddPhaseComponent } from './components/phases/add-phase/add-phase.component'
// import { EditPhaseComponent } from './components/phases/edit-phase/edit-phase.component'
// import { ViewPhaseComponent } from './components/phases/view-phase/view-phase.component'
// import { ListCalendrierComponent } from './components/calendriers/list-calendrier/list-calendrier.component'
// import { AddCalendrierComponent } from './components/calendriers/add-calendrier/add-calendrier.component'
// import { EditCalendrierComponent } from './components/calendriers/edit-calendrier/edit-calendrier.component'
// import { ViewCalendrierComponent } from './components/calendriers/view-calendrier/view-calendrier.component'
// import { ListCompetitionComponent } from './components/competitions/list-competition/list-competition.component'
// import { AddCompetitionComponent } from './components/competitions/add-competition/add-competition.component'
// import { EditCompetitionComponent } from './components/competitions/edit-competition/edit-competition.component'
// import { ViewCompetitionComponent } from './components/competitions/view-competition/view-competition.component'
// import { ListJoueurComponent } from './components/joueurs/list-joueur/list-joueur.component'
// import { AddJoueurComponent } from './components/joueurs/add-joueur/add-joueur.component'
// import { EditJoueurComponent } from './components/joueurs/edit-joueur/edit-joueur.component'
// import { ViewJoueurComponent } from './components/joueurs/view-joueur/view-joueur.component'
// // import { ListMatcheComponent } from './components/matchs/list-matche/list-matche.component'
// // import { AddMatcheComponent } from './components/matchs/add-matche/add-matche.component'
// // import { EditMatcheComponent } from './components/matches/edit-matche/edit-matche.component'
// // import { ViewMatcheComponent } from './components/matchs/view-matche/view-matche.component'
// // import { AuthGuard } from './guards/auth.guard'
// // import { AdminGuard } from './guards/admin.guard'
// // import { ZoneGuard } from './guards/zone.guard'
// // import { EquipeGuard } from './guards/equipe.guard'
// import { AccueilComponent } from './components/accueil/accueil.component';
// // import { ListMatcheComponent } from './components/matchs/list-matche/list-matche.component'
// import { EditMatcheComponent } from './components/matchs/edit-matche/edit-matche.component'
// import { MatcheViewComponent } from './components/matchs/view-matche/view-matche.component'

// // Incorrect
// // import { ListMatcheComponent } from './components/matchs/list-matche/list-matche.component'
// // import { ListMatchComponent } from './components/matchs/list-match/list-match.component'

// export const routes: Routes = [
//       // matchs
//   // { path: 'matches', component: ListMatcheComponent },
//   // { path: 'matches/add', component: AddMatcheComponent },
//   // { path: 'matches/edit/:id', component: EditMatcheComponent },
//   // { path: 'matches/view/:id', component: ViewMatcheComponent},
//     { path: 'matches/edit/:id', component: EditMatcheComponent},
//     { path: 'matches',  component: ListMatcheComponent},
//     { path: 'matche/add' , component : AddMatcheComponent },
//     { path: 'matche/view/:id' , component : MatcheViewComponent },
//   // src/app/app.routes.ts

// // export const routes: Routes = [
// //   { path: 'matche', component: MatchListComponent },
// //   { path: 'matche/:id', component: MatchDetailComponent },
// // ];
  
//       // utilisateurs
//   { path: 'utilisateurs', component: ListUtilisateurComponent },
//   { path: 'utilisateurs/add', component: AddUtilisateurComponent },
//   { path: 'utilisateurs/edit/:id', component: EditUtilisateurComponent },
//   { path: 'utilisateurs/view/:id', component: ViewUtilisateurComponent },
//     // Equipes
//   { path: 'equipes', component: ListEquipeComponent },
//   { path: 'equipes/add', component: AddEquipeComponent },
//   { path: 'equipes/edit/:id', component: EditEquipeComponent },
//   { path: 'equipes/view/:id', component: ViewEquipeComponent },
//   // Reclamations
//   // { path: 'reclamations', component: ListReclamationComponent },
//   // { path: 'reclamations/add', component: AddReclamationComponent },
//   // { path: 'reclamations/edit/:id', component: EditReclamationComponent },
//   // { path: 'reclamations/view/:id', component: ViewReclamationComponent },
//   // Statitiques
//   // { path: 'statistiques', component: ListStatistiqueComponent },
//   // { path: 'statistiques/add', component: AddStatistiqueComponent },
//   // { path: 'statistiques/edit/:id', component: EditStatistiqueComponent },
//   // { path: 'statistiques/view/:id', component: ViewStatistiqueComponent },
//   // Competitions
//   { path: 'competitions', component: ListCompetitionComponent },
//   { path: 'competitions/add', component: AddCompetitionComponent },
//   { path: 'competitions/edit/:id', component: EditCompetitionComponent },
//   { path: 'competitions/view/:id', component: ViewCompetitionComponent },
//   // Phases
//   { path: 'phases', component: ListPhaseComponent },
//   { path: 'phases/add', component: AddPhaseComponent },
//   { path: 'phases/edit/:id', component: EditPhaseComponent },
//   { path: 'phases/view/:id', component: ViewPhaseComponent },
//   // Calendriers
//   { path: 'calendriers', component: ListCalendrierComponent },
//   { path: 'calendriers/add', component: AddCalendrierComponent },
//   { path: 'calendriers/edit/:id', component: EditCalendrierComponent },
//   { path: 'calendriers/view/:id', component: ViewCalendrierComponent },
//   // Joueurs
//   { path: 'joueurs', component: ListJoueurComponent },
//   { path: 'joueurs/add', component: AddJoueurComponent },
//   { path: 'joueurs/edit/:id', component: EditJoueurComponent },
//   { path: 'joueurs/view/:id', component: ViewJoueurComponent },
//   { path: 'acceuil', component: AccueilComponent },
//     {
//     path: '**',
//     redirectTo: 'home'
//   },


//   { path: '', redirectTo: '/acceuil', pathMatch: 'full' }
//       ];

import { Routes } from '@angular/router'

import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

// Importation des composants
import { HomeComponent } from './components/home/home.component';
import { ListMatcheComponent } from './components/matches/list-matche/list-matche.component';
import { AddMatcheComponent } from './components/matches/add-matche/add-matche.component';
import { EditMatcheComponent } from './components/matches/edit-matche/edit-matche.component';
import { MatcheViewComponent } from './components/matches/view-matche/matche-view.component';

import { ListReclamationComponent } from './components/reclamations/list-reclamation/list-reclamation.component';
import { AddReclamationComponent } from './components/reclamations/add-reclamation/add-reclamation.component';
import { EditReclamationComponent } from './components/reclamations/edit-reclamation/edit-reclamation.component';
import { ViewReclamationComponent } from './components/reclamations/view-reclamation/view-reclamation.component';

import { ListStatistiqueComponent } from './components/statistiques/list-statistique/list-statistique.component';
import { AddStatistiqueComponent } from './components/statistiques/add-statistique/add-statistique.component';
import { EditStatistiqueComponent } from './components/statistiques/edit-statistique/edit-statistique.component';
import { ViewStatistiqueComponent } from './components/statistiques/view-statistique/view-statistique.component';

import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

// Définition des routes
const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: HomeComponent },
  
  // Routes pour les matches
  { path: 'matches', component: ListMatcheComponent },
  { path: 'matches/add', component: AddMatcheComponent },
  { path: 'matches/edit/:id', component: EditMatcheComponent },
  { path: 'matches/view/:id', component: MatcheViewComponent },

  // Routes pour les réclamations
  { path: 'reclamations', component: ListReclamationComponent },
  { path: 'reclamations/add', component: AddReclamationComponent },
  { path: 'reclamations/edit/:id', component: EditReclamationComponent },
  { path: 'reclamations/view/:id', component: ViewReclamationComponent },

  // Routes pour les statistiques
  { path: 'statistiques', component: ListStatistiqueComponent },
  { path: 'statistiques/add', component: AddStatistiqueComponent },
  { path: 'statistiques/edit/:id', component: EditStatistiqueComponent },
  { path: 'statistiques/view/:id', component: ViewStatistiqueComponent },

  // Route Admin avec guard (par exemple)
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] },

  // Redirection pour les routes non définies
  { path: '**', redirectTo: 'acceuil' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
