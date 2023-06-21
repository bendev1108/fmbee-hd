import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/map.js';
    document.body.appendChild(script);
  }
  

}
