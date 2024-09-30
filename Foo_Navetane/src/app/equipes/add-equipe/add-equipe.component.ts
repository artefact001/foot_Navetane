import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { EquipeService } from '../../services/equipe.service'

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
