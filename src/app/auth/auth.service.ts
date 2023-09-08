import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { User } from './user.model';

const FIREBASE_SIGNUP_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAe6lsb0uIyjTHbSTxtRspAVbrnn8Gjf_M';

const FIREBASE_LOGIN_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAe6lsb0uIyjTHbSTxtRspAVbrnn8Gjf_M';

export interface AuthResponse {
  localId: string;
  expiresIn: string;
  refreshToken: string;
  email: string;
  idToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<User>(null);

  constructor(public http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponse>(FIREBASE_SIGNUP_URL, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.generateError), tap(this.makeUserObject));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(FIREBASE_LOGIN_URL, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.generateError), tap(this.makeUserObject));
  }

  logOut() {
    this.user$.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('wrecipes-user');
  }

  autoLoginFromLocalStorage() {
    const loadedUser = JSON.parse(localStorage.getItem('wrecipes-user'));

    if (!loadedUser) return;
    const { email, userId, _token } = loadedUser;

    const newUserObject = new User(userId, email, _token);
    this.user$.next(newUserObject);
  }

  private makeUserObject = (response: AuthResponse) => {
    const {
      localId: userId,
      expiresIn,
      refreshToken,
      idToken: token,
      email,
    } = response;

    const user = new User(userId, email, token);
    this.user$.next(user);
    localStorage.setItem('wrecipes-user', JSON.stringify(user));
  };

  private generateError = (errorObject: HttpErrorResponse) => {
    const { message } = errorObject.error.error;

    switch (message) {
      case 'EMAIL_EXISTS':
        return this.generateMessage('email account already exists.');

      case 'EMAIL_NOT_FOUND':
        return this.generateMessage('email account does not exist.');

      case 'INVALID_PASSWORD':
        return this.generateMessage('invalid credentials.');

      default:
        return this.generateMessage('an unknown error occurred.');
    }
  };

  private generateMessage(message: string) {
    return throwError(() => new Error(message));
  }
}
