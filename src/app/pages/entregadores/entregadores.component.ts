import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

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

  selecao: Selecao[] = [
    {value: 'valor-0', viewValue: 'Menor valor'},
    {value: 'valor-1', viewValue: 'Maior valor'},
    {value: 'valor-2', viewValue: 'Mais recente'},
    {value: 'valor-3', viewValue: 'Mais antigo'}
  ];

  task: Task = {
    name: 'Todos',
    completed: false,
    color: 'warn',
    subtasks: [
      {name: 'Cidade', completed: false, color: 'warn'},
      {name: 'Estado', completed: false, color: 'warn'},
      {name: 'Região', completed: false, color: 'warn'},
    ]
  }

  task2: Task = {
    name: 'Todos',
    completed: false,
    color: 'warn',
    subtasks: [
      {name: 'Pequeno', completed: false, color: 'warn'},
      {name: 'Médio', completed: false, color: 'warn'},
      {name: 'Grande', completed: false, color: 'warn'},
    ]
  }

  allComplete: boolean = false;
  allComplete2: boolean = false;

  itensCount = 1;
  linkDefault: string = 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png';

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

  getEntregadoresPage(){
    this.router.navigate(['/entregadores-page']);
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
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }



  //grupo2
  updateAllComplete2() {
    this.allComplete2 = this.task2.subtasks != null && this.task2.subtasks.every(t => t.completed);
  }

  someComplete2(): boolean {
    if (this.task2.subtasks == null) {
      return false;
    }
    return this.task2.subtasks.filter(t => t.completed).length > 0 && !this.allComplete2;
  }

  setAll2(completed: boolean) {
    this.allComplete2 = completed;
    if (this.task2.subtasks == null) {
      return;
    }
    this.task2.subtasks.forEach(t => (t.completed = completed));
  }



  //slider
  formatLabel(value: number): string {
    if (value >= 100) {
      return 'R$' + Math.round(value / 100);
    }

    return `${value}`;
  }

}
