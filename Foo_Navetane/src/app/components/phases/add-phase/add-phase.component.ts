import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { PhaseService } from '../../../services/phase.service'

@Component({
  selector: 'app-add-phase',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-phase.component.html'
})
export class AddPhaseComponent {
  phaseForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private phaseService: PhaseService,
    private router: Router
  ) {
    this.phaseForm = this.fb.group({
      competitionId: ['', Validators.required],
      nom: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required]
    })
  }

  onSubmit () {
    if (this.phaseForm.valid) {
      this.phaseService.addPhase(this.phaseForm.value).subscribe(() => {
        this.router.navigate(['/phases'])
      })
    }
  }
}
