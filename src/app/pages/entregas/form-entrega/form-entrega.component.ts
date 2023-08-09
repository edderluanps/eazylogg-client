import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-entrega',
  templateUrl: './form-entrega.component.html',
  styleUrls: ['./form-entrega.component.css']
})
export class FormEntregaComponent implements OnInit {

  pacotePorte = new FormControl('');
  pacoteRemetente = new FormControl('');
  pacoteDestinatario = new FormControl('');
  pacoteObservacao = new FormControl('');

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
    alert(this.pacotePorte.value +'\n'+ this.pacoteRemetente.value +'\n'+ this.pacoteDestinatario.value +'\n'+ this.pacoteObservacao.value);
  }

}
