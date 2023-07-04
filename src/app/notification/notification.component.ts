import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{

  notifications: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNotification(message: string) {
    this.notifications.push(message);
  }

  removeNotification(index: number) {
    this.notifications.splice(index, 1);
  }

}
