import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  register() {
    this.router.navigate(['/auth/register']);
  }

  login() {
    console.log("login works",this.loginform.value);
    
    this.authService.login(this.loginform.value).subscribe(
      (success) => {
        console.log(success);
        // this.router.navigate(['auth/register']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
