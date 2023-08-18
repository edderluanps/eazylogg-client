import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;

  nome = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);
  senhaConfirmacao = new FormControl('', [Validators.required]);
  cpfOuCnpj = new FormControl('', [Validators.required]);
  dataNascimento = new FormControl('', [Validators.required]);
  logradouro = new FormControl('', [Validators.required]);
  numero = new FormControl('', [Validators.required]);
  cep = new FormControl('', [Validators.required]);
  complemento = new FormControl('', [Validators.required]);
  bairro = new FormControl('', [Validators.required]);
  cidade = new FormControl('', [Validators.required]);
  estado = new FormControl('', [Validators.required]);
  pais = new FormControl('', [Validators.required]);
  telefone1 = new FormControl('', [Validators.required]);
  telefone2 = new FormControl('');
  telefone3 = new FormControl('');

  constructor(private router : Router){}

  ngOnInit(): void {

  }

  getHomePage(){
    this.router.navigate(['/']);
  }

  getEntregas(){
    this.router.navigate(['/entregas']);
  }

  getEntregadores(){
    this.router.navigate(['/entregadores']);
  }

  getRastreamento(){
    this.router.navigate(['/rastreamento']);
  }

  getSobre(){
    this.router.navigate(['/sobre']);
  }

  getLogin(){
    this.router.navigate(['/login']);
  }

  getSignup(){
    this.router.navigate(['/signup']);
  }

  getDataForm(){

    if (this.senha.value != this.senhaConfirmacao.value) {
      alert('Suas credenciais estão diferentes. Verifique novamente');

    } else if ( this.nome.value == '',  this.email.value == '', this.senha.value == '', this.cpfOuCnpj.value == '', this.dataNascimento.value == ''){
      alert('Preencha os campos obrigatórios');

    }else {
      alert(
        this.nome.value +'\n'+
        this.email.value +'\n'+
        this.senha.value +'\n'+
        this.cpfOuCnpj.value +'\n'+
        this.dataNascimento.value +'\n'+
        this.logradouro.value +'\n'+
        this.numero.value +'\n'+
        this.cep.value +'\n'+
        this.complemento.value +'\n'+
        this.bairro.value +'\n'+
        this.cidade.value +'\n'+
        this.estado.value +'\n'+
        this.pais.value +'\n'+
        this.telefone1.value +'\n'+
        this.telefone2.value +'\n'+
        this.telefone3.value);
    }
  }
}
