import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponse } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  alreadyMember = true;
  passwordMismatch = false;
  error: false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleAuthForm() {
    this.alreadyMember = !this.alreadyMember;
  }

  onSubmit(form: NgForm) {
    let authObservable: Observable<AuthResponse>;

    const { email, password } = form.value;

    // if user is not registered, send a signup request
    if (!this.alreadyMember) {
      let confirmPassword;

      confirmPassword = form.value.confirmPassword;
      if (password !== confirmPassword) return (this.passwordMismatch = true);

      authObservable = this.authService.signup(email, password);
    } else {
      authObservable = this.authService.login(email, password);
    }

    authObservable.subscribe({
      error: (error) => {
        this.error = error.message;
      },
      next: (responseData) => {
        this.router.navigate(['/recipes']);
        console.log(responseData);
      },
    });
  }
}
