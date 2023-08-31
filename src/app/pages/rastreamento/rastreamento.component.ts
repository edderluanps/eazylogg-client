import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Entrega } from 'src/app/models/entrega';
import { EntregaService } from 'src/app/services/entrega.service';

@Component({
  selector: 'app-rastreamento',
  templateUrl: './rastreamento.component.html',
  styleUrls: ['./rastreamento.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ]
})
export class RastreamentoComponent implements OnInit {

  @ViewChild('stepper') private myStepper: MatStepper;
  totalStepsCount: number;

  pesquisa: string;
  codigo: string;
  imgMapa = 'https://developers.google.com/static/maps/images/landing/dds.png?hl=pt-br';
  entregaRastreamento: Entrega | any;
  style = 'display: none';
  novaEntrega: Entrega;

  formGroup = new FormGroup({ secondCtrl: new FormControl('') })

  constructor(
    private entregaService: EntregaService,
    private router: Router) { }

  ngOnInit(): void {

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

  limparPesquisa() {
    this.pesquisa = '';
  }

  //Rastreamento
  getEntregasByCodigoRastreamento() {
    this.entregaService.getEntregasByCodigoRastreamento(this.pesquisa).subscribe(response => {
      this.entregaRastreamento = response;

      this.novaEntrega = this.entregaRastreamento[0];


      if (this.entregaRastreamento.length >= 1) {

        if (this.novaEntrega.status == 'SOLICITADO') {
          this.statusSolicitado(this.myStepper);

        } else if (this.novaEntrega.status == 'RECOLHIDO'){
          this.statusRecolhido(this.myStepper);

        } else if (this.novaEntrega.status == 'ACAMINHO'){
          this.statusACaminho(this.myStepper);

        } else if (this.novaEntrega.status == 'ENTREGUE'){
          this.statusEntregue(this.myStepper);

        }

        this.style = 'display: block';

      } else {
        this.style = 'display: none';
      }
    });

    this.limparPesquisa();

  }

  statusSolicitado(stepper: MatStepper) {
    stepper.selectedIndex = 0;
  }

  statusRecolhido(stepper: MatStepper) {
    stepper.selectedIndex = 1;
  }

  statusACaminho(stepper: MatStepper) {
    stepper.selectedIndex = 2;
  }

  statusEntregue(stepper: MatStepper) {
    stepper.selectedIndex = 3;
  }

}
