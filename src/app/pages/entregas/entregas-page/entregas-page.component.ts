import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pacote } from 'src/app/models/pacote';
import { PacoteService } from 'src/app/services/pacote.service';

@Component({
  selector: 'app-entregas-page',
  templateUrl: './entregas-page.component.html',
  styleUrls: ['./entregas-page.component.css']
})
export class EntregasPageComponent implements OnInit {

  linkDefault: string = 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png';

  pacote : Pacote | any;

  constructor(
    private pacoteService : PacoteService,
    private router : Router,
    private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getPacotesId(params['id']));
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

  getPacotesId(id: number){
    this.pacoteService.getPacoteById(id).subscribe(response => {
      this.pacote = response
    });
  }
}
