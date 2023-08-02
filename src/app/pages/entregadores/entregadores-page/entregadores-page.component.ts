import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregadores-page',
  templateUrl: './entregadores-page.component.html',
  styleUrls: ['./entregadores-page.component.css']
})
export class EntregadoresPageComponent implements OnInit {

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
