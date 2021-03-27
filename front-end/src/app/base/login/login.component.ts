import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toast } from '../alert/toast-sweet-alert';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSignupActive: boolean = false;

  signInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  signUpForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  wrongPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signInSubmit() {
    this.signInForm.markAllAsTouched();

    if (!this.signInForm.valid) {
      return;
    }

    this.authService.login(this.signInForm.value).subscribe(
      (data) => {
        toast(true, data.message);
        this.router.navigateByUrl('/dashboard');
      },
      (error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.wrongPassword = true;
        }
      }
    );
  }

  signUpSubmit() {
    this.signUpForm.markAllAsTouched();

    if (!this.signUpForm.valid) {
      return;
    }

    this.authService.resgistration(this.signUpForm.value).subscribe((data) => {
      toast(true, data.message);
      this.isSignupActive = false;
    });
  }

  signUpActive(isSignupActive: boolean) {
    this.isSignupActive = isSignupActive;
  }
}
