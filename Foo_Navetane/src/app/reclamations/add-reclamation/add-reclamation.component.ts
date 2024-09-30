import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ReclamationService } from '../../services/reclamation.service'

@Component({
  selector: 'app-add-reclamation',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-reclamation.component.html'
})
export class AddReclamationComponent {
  reclamationForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) {
    this.reclamationForm = this.fb.group({
      utilisateurId: ['', Validators.required],
      description: ['', Validators.required],
      statut: ['', Validators.required]
    })
  }

  onSubmit () {
    if (this.reclamationForm.valid) {
      this.reclamationService
        .addReclamation(this.reclamationForm.value)
        .subscribe(() => {
          this.router.navigate(['/reclamations'])
        })
    }
  }
}
