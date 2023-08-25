import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pacote } from 'src/app/models/pacote';
import { Usuario } from 'src/app/models/usuario';
import { PacoteService } from 'src/app/services/pacote.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-entregadores-page',
  templateUrl: './entregadores-page.component.html',
  styleUrls: ['./entregadores-page.component.css']
})
export class EntregadoresPageComponent  implements OnInit {

  linkDefault: string = 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png';

  usuario : Usuario | any;

  constructor(
    private usuarioService : UsuarioService,
    private router : Router,
    private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getUsuarioById(params['id']));
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

  getUsuarioById(id: number){
    this.usuarioService.getUsuarioById(id).subscribe(response => {
      this.usuario = response
    });
  }
}
