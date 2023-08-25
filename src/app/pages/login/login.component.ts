import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { CredenciaisDTO } from './credenciais.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  hide = true;

  constructor(
    public authService: AuthService,
    private router: Router,
    public dialog: MatDialog) { }

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

  login0() {
    if (this.email.value === '') {
      alert('Preencha o email');
    } else if (this.senha.value === '') {
      alert('Preencha o senha');
    } else {
      alert(this.email.value + '\n' + this.senha.value);
    }
  }

  login(){
    this.authService.authenticate(this.credenciais).subscribe(response => {
     this.authService.successfulLogin(response.headers.get('Authorization') || '{}');
     this.router.navigate(['']);
     alert('Logado :]');
    }, error => {
      alert('Não está logado :[' + error.erro);
    });

  }

}
