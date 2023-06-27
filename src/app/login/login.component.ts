import { AfterViewInit, Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BrdsqlService } from '../service/brdsql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit{

  isLogin = false;
  profile: any;
   imglogo = "./assets/image/logo.png";


  constructor(){}



   //Integrate AdminLTM ChartJS
   ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/login.js';
    document.body.appendChild(script);
  }

}
