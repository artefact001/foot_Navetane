import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { StatistiqueService } from '../../services/statistique.service'

@Component({
  selector: 'app-add-statistique',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-statistique.component.html'
})
export class AddStatistiqueComponent {
  statistiqueForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private statistiqueService: StatistiqueService,
    private router: Router
  ) {
    this.statistiqueForm = this.fb.group({
      matchId: ['', Validators.required],
      equipeId: ['', Validators.required],
      possession: ['', Validators.required],
      tirs: ['', Validators.required],
      passes: ['', Validators.required]
    })
  }

  onSubmit () {
    if (this.statistiqueForm.valid) {
      this.statistiqueService
        .addStatistique(this.statistiqueForm.value)
        .subscribe(() => {
          this.router.navigate(['/statistiques'])
        })
    }
  }
}
