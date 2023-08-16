import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entregas-page',
  templateUrl: './entregas-page.component.html',
  styleUrls: ['./entregas-page.component.css']
})
export class EntregasPageComponent implements OnInit {

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
