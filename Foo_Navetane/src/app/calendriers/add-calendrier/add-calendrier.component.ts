import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { CalendrierService } from '../../services/calendrier.service'

@Component({
  selector: 'app-add-calendrier',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-calendrier.component.html'
})
export class AddCalendrierComponent {
  calendrierForm: FormGroup

  constructor (
    private fb: FormBuilder,
    private calendrierService: CalendrierService,
    private router: Router
  ) {
    this.calendrierForm = this.fb.group({
      matchId: ['', Validators.required],
      date: ['', Validators.required],
      lieu: ['', Validators.required]
    })
  }

  onSubmit () {
    if (this.calendrierForm.valid) {
      this.calendrierService
        .addCalendrier(this.calendrierForm.value)
        .subscribe(() => {
          this.router.navigate(['/calendriers'])
        })
    }
  }
}
