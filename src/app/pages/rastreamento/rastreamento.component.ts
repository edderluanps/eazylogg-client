import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rastreamento',
  templateUrl: './rastreamento.component.html',
  styleUrls: ['./rastreamento.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ]
})
export class RastreamentoComponent implements OnInit {

  pesquisa = new FormControl('');
  results : number = 1;
  interests : any[];
  imgMapa = 'https://developers.google.com/static/maps/images/landing/dds.png?hl=pt-br';

  formGroup = new FormGroup({ secondCtrl: new FormControl(''), })

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.interests = [
      { value: 'reading', viewValue: 'Reading' },
      { value: 'swimming', viewValue: 'Swimming' },
      { value: 'cycling', viewValue: 'Cycling' }
    ];
  }

  getHomePage() {
    this.router.navigate(['/']);
  }

  getEntregas() {
    this.router.navigate(['/entregas']);
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


  //Pesquisa
  pesquisar() {
    alert(this.pesquisa.value);
    this.limparPesquisa();
  }

  limparPesquisa() {
    this.pesquisa = new FormControl('');
  }

}
