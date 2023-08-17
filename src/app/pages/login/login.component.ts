import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  hide = true;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
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
