import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-plot-activity',
  templateUrl: './plot-activity.component.html',
  styleUrls: ['./plot-activity.component.scss']
})
export class PlotActivityComponent {


  submit(save:NgForm){
    console.log("finish save",save);
    console.log(save.value);  // { first: '', last: '' }
    console.log(save.valid);  // false

  }

  labelPosition: 'before' | 'after' = 'after';

}
