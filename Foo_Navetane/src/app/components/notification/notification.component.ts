import { Component, OnInit } from '@angular/core'
import { NotificationService } from 'src/app/services/notification.service'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: any[] = []

  constructor (private notificationService: NotificationService) {}

  ngOnInit (): void {
    this.getNotifications()
  }

  getNotifications () {
    this.notificationService.getNotifications().subscribe((data: any) => {
      this.notifications = data
    })
  }
}
