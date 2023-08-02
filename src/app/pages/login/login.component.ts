import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required, Validators.email]);

  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  getSignup() {
    this.router.navigate(['/signup']);
  }

  login() {
    if (this.email.value === '') {
      alert('Preencha o email');
    } else if (this.senha.value === '') {
      alert('Preencha o senha');
    } else {
      alert(this.email.value + '\n' + this.senha.value);
    }
  }

}
