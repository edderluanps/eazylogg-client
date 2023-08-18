import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

interface Selecao {
  value: string;
  viewValue: string;
}

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-entregadores',
  templateUrl: './entregadores.component.html',
  styleUrls: ['./entregadores.component.css']
})
export class EntregadoresComponent implements OnInit {

  itensCount = 1;
  linkDefault: string = 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png';

  usuario: Usuario[];

  ordenar = new FormControl('');
  estado = new FormControl('');
  cidade = new FormControl('');
  porte = new FormControl('');
  pesquisa = new FormControl('');

  constructor(private router : Router, private usuarioService : UsuarioService){}

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

  //Get Usuário
  getPacotes() {
    this.usuarioService.getUsuario().subscribe(response => this.usuario = response, error => {
     alert('Oops... Ocorreu um erro: ' + error.message);
    });
  }

}
