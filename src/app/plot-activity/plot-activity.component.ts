import { Component } from '@angular/core';


@Component({
  selector: 'app-plot-activity',
  templateUrl: './plot-activity.component.html',
  styleUrls: ['./plot-activity.component.scss']
})
export class PlotActivityComponent {

  labelPosition: 'before' | 'after' = 'after';

}
