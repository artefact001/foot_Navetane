import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { MatcheService } from ' ../../../services/MatcheService' ;

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
    private matcheService: MatcheService,
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
    if (this.matcheForm.valid) {
      this.matcheService.addMatche(this.matcheForm.value).subscribe(() => {
        this.router.navigate(['/matches'])
      })
    }
  }
}
