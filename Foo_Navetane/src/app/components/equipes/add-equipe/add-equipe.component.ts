import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, Routes } from '@angular/router'
import { EquipeService } from '../../services/equipe.service'
import { AdminGuard } from '../../../guards/admin.guard'
import { AuthGuard } from '../../../guards/auth.guard'
import { EquipeGuard } from '../../../guards/equipe.guard'
import { LicenceGuard } from '../../../guards/licence.guard'
import { RoleGuard } from '../../../guards/role.guard'
import { SessionGuard } from '../../../guards/session.guard'
import { TirageGuard } from '../../../guards/tirage.guard'
import { ZoneGuard } from '../../../guards/zone.guard'
import { AddCalendrierComponent } from '../../calendriers/add-calendrier/add-calendrier.component'
import { EditCalendrierComponent } from '../../calendriers/edit-calendrier/edit-calendrier.component'
import { ListCalendrierComponent } from '../../calendriers/list-calendrier/list-calendrier.component'
import { ViewCalendrierComponent } from '../../calendriers/view-calendrier/view-calendrier.component'
import { AddCompetitionComponent } from '../../competitions/add-competition/add-competition.component'
import { EditCompetitionComponent } from '../../competitions/edit-competition/edit-competition.component'
import { ListCompetitionComponent } from '../../competitions/list-competition/list-competition.component'
import { ViewCompetitionComponent } from '../../competitions/view-competition/view-competition.component'
import { AddJoueurComponent } from '../../joueurs/add-joueur/add-joueur.component'
import { EditJoueurComponent } from '../../joueurs/edit-joueur/edit-joueur.component'
import { ListJoueurComponent } from '../../joueurs/list-joueur/list-joueur.component'
import { ViewJoueurComponent } from '../../joueurs/view-joueur/view-joueur.component'
import { AddMatchComponent } from '../../matchs/add-match/add-match.component'
import { EditMatchComponent } from '../../matchs/edit-match/edit-match.component'
import { ListMatchComponent } from '../../matchs/list-match/list-match.component'
import { ViewMatchComponent } from '../../matchs/view-match/view-match.component'
import { AddPhaseComponent } from '../../phases/add-phase/add-phase.component'
import { EditPhaseComponent } from '../../phases/edit-phase/edit-phase.component'
import { ListPhaseComponent } from '../../phases/list-phase/list-phase.component'
import { ViewPhaseComponent } from '../../phases/view-phase/view-phase.component'
import { AddReclamationComponent } from '../../reclamations/add-reclamation/add-reclamation.component'
import { EditReclamationComponent } from '../../reclamations/edit-reclamation/edit-reclamation.component'
import { ListReclamationComponent } from '../../reclamations/list-reclamation/list-reclamation.component'
import { ViewReclamationComponent } from '../../reclamations/view-reclamation/view-reclamation.component'
import { AddStatistiqueComponent } from '../../statistiques/add-statistique/add-statistique.component'
import { EditStatistiqueComponent } from '../../statistiques/edit-statistique/edit-statistique.component'
import { ListStatistiqueComponent } from '../../statistiques/list-statistique/list-statistique.component'
import { ViewStatistiqueComponent } from '../../statistiques/view-statistique/view-statistique.component'
import { AddUtilisateurComponent } from '../../utilisateurs/add-utilisateur/add-utilisateur.component'
import { EditUtilisateurComponent } from '../../utilisateurs/edit-utilisateur/edit-utilisateur.component'
import { ListUtilisateurComponent } from '../../utilisateurs/list-utilisateur/list-utilisateur.component'
import { ViewUtilisateurComponent } from '../../utilisateurs/view-utilisateur/view-utilisateur.component'
import { EditEquipeComponent } from '../edit-equipe/edit-equipe.component'
import { ListEquipeComponent } from '../list-equipe/list-equipe.component'
import { ViewEquipeComponent } from '../view-equipe/view-equipe.component'

@Component({
  selector: 'app-add-equipe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-equipe.component.html'
})
export class AddEquipeComponent {
  equipeForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private equipeService: EquipeService,
    private router: Router
  ) {
    this.equipeForm = this.fb.group({
      nom: ['', Validators.required],
      ville: ['', Validators.required],
      stade: ['', Validators.required]
    })
  }

  onSubmit () {
    if (this.equipeForm.valid) {
      this.equipeService.addEquipe(this.equipeForm.value).subscribe(() => {
        this.router.navigate(['/equipes'])
      })
    }
  }
}

export const routes: Routes = [
  // matchs
  { path: 'matchs', component: ListMatchComponent },
  { path: 'matchs/add', component: AddMatchComponent },
  { path: 'matchs/edit/:id', component: EditMatchComponent },
  { path: 'matchs/view/:id', component: ViewMatchComponent },
  // utilisateurs
  { path: 'utilisateurs', component: ListUtilisateurComponent },
  { path: 'utilisateurs/add', component: AddUtilisateurComponent },
  { path: 'utilisateurs/edit/:id', component: EditUtilisateurComponent },
  { path: 'utilisateurs/view/:id', component: ViewUtilisateurComponent },
  // Equipes
  { path: 'equipes', component: ListEquipeComponent },
  { path: 'equipes/add', component: AddEquipeComponent },
  { path: 'equipes/edit/:id', component: EditEquipeComponent },
  { path: 'equipes/view/:id', component: ViewEquipeComponent },
  // Reclamations
  { path: 'reclamations', component: ListReclamationComponent },
  { path: 'reclamations/add', component: AddReclamationComponent },
  { path: 'reclamations/edit/:id', component: EditReclamationComponent },
  { path: 'reclamations/view/:id', component: ViewReclamationComponent },
  // Statitiques
  { path: 'statistiques', component: ListStatistiqueComponent },
  { path: 'statistiques/add', component: AddStatistiqueComponent },
  { path: 'statistiques/edit/:id', component: EditStatistiqueComponent },
  { path: 'statistiques/view/:id', component: ViewStatistiqueComponent },
  // Competitions
  { path: 'competitions', component: ListCompetitionComponent },
  { path: 'competitions/add', component: AddCompetitionComponent },
  { path: 'competitions/edit/:id', component: EditCompetitionComponent },
  { path: 'competitions/view/:id', component: ViewCompetitionComponent },
  // Phases
  { path: 'phases', component: ListPhaseComponent },
  { path: 'phases/add', component: AddPhaseComponent },
  { path: 'phases/edit/:id', component: EditPhaseComponent },
  { path: 'phases/view/:id', component: ViewPhaseComponent },
  // Calendriers
  { path: 'calendriers', component: ListCalendrierComponent },
  { path: 'calendriers/add', component: AddCalendrierComponent },
  { path: 'calendriers/edit/:id', component: EditCalendrierComponent },
  { path: 'calendriers/view/:id', component: ViewCalendrierComponent },
  // Joueurs
  { path: 'joueurs', component: ListJoueurComponent },
  { path: 'joueurs/add', component: AddJoueurComponent },
  { path: 'joueurs/edit/:id', component: EditJoueurComponent },
  { path: 'joueurs/view/:id', component: ViewJoueurComponent },

  {
    path: 'admin',
    component: adminComponent,
    canActivate: [AdminGuard] // Seulement pour les administrateurs
  },

  {
    path: 'zone',
    component: ZoneComponent,
    canActivate: [ZoneGuard] // Seulement pour les utilisateurs des zones
  },

  {
    path: 'equipe',
    component: EquipeComponent,
    canActivate: [EquipeGuard] // Seulement pour les utilisateurs des équipes
  },
  {
    path: '**',
    redirectTo: 'home'
  },

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'admin' }
  },
  {
    path: 'joueur',
    component: JoueurComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'joueur' }
  },
  {
    path: 'session/:id',
    component: SessionComponent,
    canActivate: [AuthGuard, SessionGuard]
  },
  {
    path: 'licence-required',
    component: LicenceComponent,
    canActivate: [AuthGuard, LicenceGuard]
  },
  {
    path: 'tirage',
    component: TirageComponent,
    canActivate: [AuthGuard, TirageGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
