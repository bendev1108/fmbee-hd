import { AfterViewInit, Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BrdsqlService } from '../service/brdsql.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  username?: 'benjama';
  password?: '12345';
  Login = '';
  isLogin = false;
  profile: any;

  constructor(private router: Router, private brdsql: BrdsqlService, private fb: FormBuilder) { }

  async LoginData() {
    let username = this.username
    let password = this.password
    await this.brdsql.getLogin(username, password).subscribe({
      next: (login: any) => {
        this.Login = login.recordset
        console.log("correct" + login.value);
        this.router.navigate(['/Dashboard']);

      }
    })

  }



  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/login.js';
    document.body.appendChild(script);
  }

}
