import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    isAdmin: new FormControl(true),
  });
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  register() {
    // console.log(this.form.value);
    this.authService.register(this.form.value).subscribe(
      (success) => {
        console.log(success);
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
}
