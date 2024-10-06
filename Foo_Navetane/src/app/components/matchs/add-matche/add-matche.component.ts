import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms'
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common' // Add CommonModule for ngFor
import { MatcheService } from '../../../services/matche.service'
// import { MatcheService } from '../../../services/matche.service' // Ensure correct import for matcheService

@Component({
  selector: 'app-add-matche',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-matche.component.html',
  styleUrls: ['./add-matche.component.css'] // Fixed the typo
})
export class AddMatchComponent implements OnInit {
  matcheForm: FormGroup
  matches: any[] = []

  constructor (
    private fb: FormBuilder,
    private matcheService: MatcheService, // Ensure the correct service is injected
    private router: Router
  ) {
    console.log('AddMatchComponent constructor')
    this.matcheForm = this.fb.group({
      equipe1Id: ['', Validators.required],
      equipe2Id: ['', Validators.required],
      date: ['', Validators.required],
      scoreEquipe1: ['', Validators.required],
      scoreEquipe2: ['', Validators.required]
    })
  }

  ngOnInit (): void {
    this.loadMatches()
  }

  loadMatches (): void {
    this.matcheService.getAllMatches().subscribe(data => {
      this.matches = data
    })
  }

  onSubmit (): void {
    if (this.matcheForm.valid) {
      this.matcheService.createMatche(this.matcheForm.value).subscribe(() => {
        this.loadMatches() // Reload the list after adding
        this.matcheForm.reset() // Reset the form after submission
      })
    }
  }

  viewMatch (id: number): void {
    this.router.navigate([`/matches/view/${id}`]) // Assuming route exists
  }

  editMatch (id: number): void {
    this.router.navigate([`/matches/edit/${id}`]) // Assuming route exists
  }

  deleteMatch (id: number): void {
    this.matcheService.deleteMatche(id).subscribe(() => {
      this.loadMatches() // Reload the list after deletion
    })
  }
}
