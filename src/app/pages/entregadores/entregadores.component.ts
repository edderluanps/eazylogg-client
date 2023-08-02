import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregadores',
  templateUrl: './entregadores.component.html',
  styleUrls: ['./entregadores.component.css']
})
export class EntregadoresComponent implements OnInit {

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

}
