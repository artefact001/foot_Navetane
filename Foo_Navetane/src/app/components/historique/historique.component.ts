import { Component, OnInit } from '@angular/core'
import { HistoriqueService } from 'src/app/services/historique.service'

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  historiques: any[] = []

  constructor (private historiqueService: HistoriqueService) {}

  ngOnInit (): void {
    this.getHistoriques()
  }

  getHistoriques () {
    this.historiqueService.getHistoriques().subscribe((data: any) => {
      this.historiques = data
    })
  }
}
