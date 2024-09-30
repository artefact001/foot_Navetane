import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { MatchService } from '../../../services/match.service';

@Component({
  selector: 'app-add-match',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-match.component.html'
})
export class AddMatchComponent {
  matchForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private matchService: MatchService,
    private router: Router
  ) {
    this.matchForm = this.fb.group({
      equipe1Id: ['', Validators.required],
      equipe2Id: ['', Validators.required],
      date: ['', Validators.required],
      scoreEquipe1: ['', Validators.required],
      scoreEquipe2: ['', Validators.required]
    })
  }

  onSubmit () {
    if (this.matchForm.valid) {
      this.matchService.addMatch(this.matchForm.value).subscribe(() => {
        this.router.navigate(['/matchs'])
      })
    }
  }
}
