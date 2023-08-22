import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pacote } from 'src/app/models/pacote';
import { PacoteService } from 'src/app/services/pacote.service';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})

export class EntregasComponent implements OnInit {

  linkDefault: string = 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png';

  pacote : Pacote[] | any;

  loadData = true;

  ordenar = new FormControl('');
  estado = new FormControl('');
  cidade = new FormControl('');
  porte = new FormControl('');
  pesquisa : string;

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
    alert(this.pesquisa);
    this.limparPesquisa();
  }

  limparPesquisa(){
    this.pesquisa = '';
  }

  //Filtrar
  filtros(){
    alert(this.ordenar.value + '\n' + this.estado.value + '\n' + this.cidade.value + '\n' + this.porte.value);
  }

  limparFiltros(){
    this.ordenar = new FormControl('');
  }

  //Get Pacotes
  getPacotes() {
    this.loadData = false;
    this.pacoteService.getPacotes().subscribe(response => this.pacote = response, error => {
     alert('Oops... Ocorreu um erro: ' + error.message);
    });
  }

    //Get Pacotes
    getPesquisa() {
      this.loadData = false;
      this.pacoteService.getPesquisaPacote(this.pesquisa).subscribe(response => this.pacote = response, error => {
       alert('Oops... Ocorreu um erro: ' + error.message);
      });
    }
}
