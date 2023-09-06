import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  alreadyMember = true;

  toggleAuthForm() {
    this.alreadyMember = !this.alreadyMember;
  }

  onSubmit(form: NgForm) {
    const { email, password } = form.value;
  }
}
