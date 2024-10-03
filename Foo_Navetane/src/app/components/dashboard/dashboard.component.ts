import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  requests = [
    { NomComplet: 'Cheikh Tidiane Sane', email: 'cheikhsane202@gmail.com', phone: '+221 77 998 49 97', Adresse: 'Dakar' ,  },
    // Ajoutez d'autres demandes ici
  ];

  viewDetails(request: any) {
    // Logic for viewing details
  }

  editRequest(request: any) {
    // Logic for editing the request
  }

  deleteRequest(request: any) {
    // Logic for deleting the request
  }
}
