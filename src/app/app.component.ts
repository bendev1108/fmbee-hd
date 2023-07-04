import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'fmbrr';

  @ViewChild(NotificationComponent)
  notificationComponent: NotificationComponent = new NotificationComponent;

  showNotification() {
    this.notificationComponent.addNotification('This is a sample notification.');
  }

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/sidebar.js';
    document.body.appendChild(script);
  }
}
