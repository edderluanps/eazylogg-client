import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pacote } from 'src/app/models/pacote';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioDTO } from 'src/app/models/usuario.dto';
import { AuthService } from 'src/app/services/auth.service';
import { PacoteService } from 'src/app/services/pacote.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  linkDefault: string = 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png';

  loadData : boolean = true;
  email: string;
  usuario: UsuarioDTO;
  user: Usuario;

  pacote: Pacote[] | any;

  constructor(
    private pacoteService: PacoteService,
    private localStorage: StorageService,
    private usuarioService: UsuarioService,
    private authService: AuthService,
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

  getUsuarioLogado(){
    let localUser = this.localStorage.getLocalUser();

    if (localUser && localUser.email) {
      this.usuarioService.getUsuarioByEmail(localUser.email).subscribe(response => {
        this.usuario = response as UsuarioDTO
        this.router.navigate(['/perfil']);

     }, error => {
      if (error.status == 403) {
        this.router.navigate(['/login']);
      }
     });
    }else{
      this.router.navigate(['/login']);
    }
  }

}
