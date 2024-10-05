import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router'
import { CompetitionService } from '../../../services/competition.service'
// import { CompetitionService } from '../../../services/competition.service'
@Component({
  selector: 'app-add-competition',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-competition.component.html',
  styleUrl: './add-competition.component.css'
})


// @Component({
//   selector: 'app-articles',
//   standalone: true,
//   imports: [NavbarComponent, RouterModule],
//   templateUrl: './articles.component.html',
//   styleUrl: './articles.component.css'
// })


export class AddCompetitionComponent {
  competitionForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private competitionService: CompetitionService,
    private router: Router
  ) {
    this.competitionForm = this.fb.group({
      nom: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required]
    })
  }

  onSubmit () {
    if (this.competitionForm.valid) {
      this.competitionService
        .addCompetition(this.competitionForm.value)
        .subscribe(() => {
          this.router.navigate(['/competitions'])
        })
    }
  }
}
