import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'fmbrr';

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/sidebar.js';
    document.body.appendChild(script);
  }
}
