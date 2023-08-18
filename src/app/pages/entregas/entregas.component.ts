import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { Pacote } from 'src/app/models/pacote';
import { PacoteService } from 'src/app/services/pacote.service';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})

export class EntregasComponent implements OnInit {

  itensCount = 1;
  linkDefault: string = 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png';

  pacote : Pacote[];

  ordenar = new FormControl('');
  estado = new FormControl('');
  cidade = new FormControl('');
  porte = new FormControl('');
  pesquisa = new FormControl('');

  constructor(private router : Router, private pacoteService : PacoteService){}

  ngOnInit(): void {
    this.getPacotes();
  }

  getHomePage(){
    this.router.navigate(['/']);
  }

  getEntregasPage(){
    this.router.navigate(['/entregas-page']);
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

  //grupo1
  updateAllComplete() {
  }

  //slider
  formatLabel(value: number): string {
    if (value >= 100) {
      return 'R$' + Math.round(value / 100);
    }

    return `${value}`;
  }

  //Pesquisa
  pesquisar(){
    alert(this.pesquisa.value);
    this.limparPesquisa();
  }

  limparPesquisa(){
    this.pesquisa = new FormControl('');
  }

  //Filtrar
  filtros(){
    alert(this.ordenar.value + '\n' + this.estado.value + '\n' + this.cidade.value + '\n' + this.porte.value);
  }

  limparFiltros(){
    this.ordenar = new FormControl('');
  }

  //Get Usuarios
  getPacotes() {
    this.pacoteService.getPacotes().subscribe(response => this.pacote = response, error => {
     alert('Oops... Ocorreu um erro: ' + error.message);
    });
  }
}
