import { Routes } from '@angular/router'
// Importation des composants
// import { HomeComponent } from './components/home/home.component';
// import { ListMatcheComponent } from './components/matches/list-matche/list-matche.component';
// import { AddMatcheComponent } from './components/matches/add-matche/add-matche.component';
// import { EditMatcheComponent } from './components/matches/edit-matche/edit-matche.component';
// import { MatcheViewComponent } from './components/matches/view-matche/matche-view.component';

import { ListReclamationComponent } from './components/reclamations/list-reclamation/list-reclamation.component';
import { AddReclamationComponent } from './components/reclamations/add-reclamation/add-reclamation.component';
import { EditReclamationComponent } from './components/reclamations/edit-reclamation/edit-reclamation.component';
import { ViewReclamationComponent } from './components/reclamations/view-reclamation/view-reclamation.component';

import { ListStatistiqueComponent } from './components/statistiques/list-statistique/list-statistique.component';
import { AddStatistiqueComponent } from './components/statistiques/add-statistique/add-statistique.component';
import { EditStatistiqueComponent } from './components/statistiques/edit-statistique/edit-statistique.component';
import { ViewStatistiqueComponent } from './components/statistiques/view-statistique/view-statistique.component';

import { ListUtilisateurComponent } from './components/utilisateurs/list-utilisateur/list-utilisateur.component';
import { AddUtilisateurComponent } from './components/utilisateurs/add-utilisateur/add-utilisateur.component';
import { EditUtilisateurComponent } from './components/utilisateurs/edit-utilisateur/edit-utilisateur.component';
import { ViewUtilisateurComponent } from './components/utilisateurs/view-utilisateur/view-utilisateur.component';
import { ListCompetitionComponent } from './components/competitions/list-competition/list-competition.component';
import { AddCompetitionComponent } from './components/competitions/add-competition/add-competition.component';
import { EditCompetitionComponent } from './components/competitions/edit-competition/edit-competition.component';
import { ViewCompetitionComponent } from './components/competitions/view-competition/view-competition.component';
import { ListJoueurComponent } from './components/joueurs/list-joueur/list-joueur.component';
import { AddJoueurComponent } from './components/joueurs/add-joueur/add-joueur.component';
import { EditJoueurComponent } from './components/joueurs/edit-joueur/edit-joueur.component';
import { ViewJoueurComponent } from './components/joueurs/view-joueur/view-joueur.component';
import { ListCalendrierComponent } from './components/calendriers/list-calendrier/list-calendrier.component';
import { AddCalendrierComponent } from './components/calendriers/add-calendrier/add-calendrier.component';
import { EditCalendrierComponent } from './components/calendriers/edit-calendrier/edit-calendrier.component';
import { ViewCalendrierComponent } from './components/calendriers/view-calendrier/view-calendrier.component';
import { ListPhaseComponent } from './components/phases/list-phase/list-phase.component';
import { AddPhaseComponent } from './components/phases/add-phase/add-phase.component';
import { EditPhaseComponent } from './components/phases/edit-phase/edit-phase.component';
import { ViewPhaseComponent } from './components/phases/view-phase/view-phase.component';

// Définition des routes

export const routes: Routes = [

// const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  // { path: 'acceuil', component: HomeComponent },

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


    { path: 'utilisateurs', component: ListUtilisateurComponent },
  { path: 'utilisateurs/add', component: AddUtilisateurComponent },
  { path: 'utilisateurs/edit/:id', component: EditUtilisateurComponent },
  { path: 'utilisateurs/view/:id', component: ViewUtilisateurComponent },

  { path: 'competitions', component: ListCompetitionComponent },
  { path: 'competitions/add', component: AddCompetitionComponent },
  { path: 'competitions/edit/:id', component: EditCompetitionComponent },
  { path: 'competitions/view/:id', component: ViewCompetitionComponent },


  { path: 'joueurs', component: ListJoueurComponent },
  { path: 'joueurs/add', component: AddJoueurComponent },
  { path: 'joueurs/edit/:id', component: EditJoueurComponent },
  { path: 'joueurs/view/:id', component: ViewJoueurComponent },


  { path: 'calendriers', component: ListCalendrierComponent },
  { path: 'calendriers/add', component: AddCalendrierComponent },
  { path: 'calendriers/edit/:id', component: EditCalendrierComponent },
  { path: 'calendriers/view/:id', component: ViewCalendrierComponent },

  { path: 'phases', component: ListPhaseComponent },
  { path: 'phases/add', component: AddPhaseComponent },
  { path: 'phases/edit/:id', component: EditPhaseComponent },
  { path: 'phases/view/:id', component: ViewPhaseComponent },


  // Route Admin avec guard (par exemple)
  // { path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuard] },

  // Redirection pour les routes non définies
  { path: '**', redirectTo: 'acceuil' }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
