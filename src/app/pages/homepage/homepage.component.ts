import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pacote } from 'src/app/models/pacote';
import { PacoteService } from 'src/app/services/pacote.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  linkDefault: string = 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png';

  loadData : boolean = true;

  pacote: Pacote[] | any;

  constructor(
    private pacoteService: PacoteService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUltimosPacotes();
  }

  getHomePage() {
    this.router.navigate(['/']);
  }

  getEntregas() {
    this.router.navigate(['/entregas']);
  }

  getNovaEntrega() {
    this.router.navigate(['/nova-entrega']);
  }

  getEntregadores() {
    this.router.navigate(['/entregadores']);
  }

  getRastreamento() {
    this.router.navigate(['/rastreamento']);
  }

  getSobre() {
    this.router.navigate(['/sobre']);
  }

  getLogin() {
    this.router.navigate(['/login']);
  }

  getSignup() {
    this.router.navigate(['/signup']);
  }

  //Get Ultimos Pacotes
  getUltimosPacotes() {
    this.loadData = false;
    this.pacoteService.getUltimosPacotes().subscribe(response => this.pacote = response, error => {
      alert('Oops... Ocorreu um erro: ' + error.message);
    });
  }

}
