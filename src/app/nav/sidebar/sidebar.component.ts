import { FormBuilder, Validators } from '@angular/forms';
import { BrdsqlService } from 'src/app/service/brdsql.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  imglogo = "./assets/image/logo.png";
  imguser = "./assets/image/profile.png";
  profile: any;
  isLogin = false;

  constructor(private router: Router, private brdsql:BrdsqlService,private fb: FormBuilder) {
    // if (this.brdsql.isLogin()) {
    //   this.isLogin = true;
    //   this.profile = JSON.parse(localStorage.getItem('profile') || '{}') ;
    // }
  }

  // loginForm = this.fb.group({
  //   email: ['', [Validators.email, Validators.required]],
  //   password: ['', [Validators.required, Validators.minLength(3)]]
  // });

  // logout() {
  //   this.brdsql.logout();
  //   this.isLogin = false;
  //   this.router.navigate(['/']);
  //   this.loginForm.reset();
  // }
  logout(): void {
    // Perform logout actions here if necessary
    this.router.navigate(['/login']);
  }

}
