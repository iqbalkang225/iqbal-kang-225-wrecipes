import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const FIREBASE_AUTH_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAe6lsb0uIyjTHbSTxtRspAVbrnn8Gjf_M';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient) {}

  signup() {}
}
