import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/models/endereco';
import { EnderecoDTO } from 'src/app/models/endereco.dto';
import { Entrega } from 'src/app/models/entrega';
import { Pacote } from 'src/app/models/pacote';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioDTO } from 'src/app/models/usuario.dto';
import { Veiculo } from 'src/app/models/veiculo';
import { AuthService } from 'src/app/services/auth.service';
import { EntregaService } from 'src/app/services/entrega.service';
import { PacoteService } from 'src/app/services/pacote.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  email: string;
  usuario: UsuarioDTO;
  user: Usuario;
  items: Endereco[];
  todosUsuarios: Usuario[] | any;
  veiculos: Veiculo[] | any;
  pacote: Pacote[] | any;
  todosPacotes: Pacote[] | any;
  entrega: Entrega[] | any;
  label: string = 'Entregas';

  opened = false;
  selectedIndex: number = 0;
  tabsNumber: number = 4;

  panelOpenState = false;

  showFiller = false;

  constructor(
    private storage: StorageService,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private pacoteService: PacoteService,
    private entregaService: EntregaService,
    private veiculoService: VeiculoService,
    private router: Router) { }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();

    if (localUser && localUser.email) {
      this.usuarioService.getUsuarioByEmail(localUser.email).subscribe(response => {
        this.usuario = response as UsuarioDTO

      }, error => {
        if (error.status == 403) {
          this.router.navigate(['/login']);
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
    this.getUserAllData();
    this.getEnderecoUser();
    this.getPacoteByUser();
    this.getEntregasByUser();
    this.getTodosPacotes();
    this.getUsuarios();
    this.getVeiculos();
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  getUserAllData() {
    let localUser = this.storage.getLocalUser();
    this.usuarioService.getUsuarioByEmail(localUser.email).subscribe(response => {
      this.user = response as Usuario;
    });
  }

  getEnderecoUser() {
    let localUser = this.storage.getLocalUser();

    if (localUser && localUser.email) {
      this.usuarioService.getUsuarioByEmail(localUser.email)
        .subscribe(response => {
          this.items = response['endereco'];
        });
    } else {

    }
  }

  getPacoteByUser() {
    let localUser = this.storage.getLocalUser();
    this.usuarioService.getUsuarioByEmail(localUser.email).subscribe(response => {
      this.user = response as Usuario;
      this.pacoteService.getPacoteByUsuario(this.user.id).subscribe(response => {
        this.pacote = response as Pacote;
      });
    });
  }

  getEntregasByUser() {
    let localUser = this.storage.getLocalUser();
    this.usuarioService.getUsuarioByEmail(localUser.email).subscribe(response => {
      this.user = response as Usuario;
      this.entregaService.getEntregaByUsuario(this.user.id).subscribe(response => {
        this.entrega = response as Pacote;
        console.log(this.entrega);
      });
    });
  }

  getUsuarios(){
    this.usuarioService.getUsuario().subscribe(response =>{
      this.todosUsuarios = response;
      console.log(response);
    });
  }

  getTodosPacotes(){
    this.pacoteService.getPacotes().subscribe(response =>{
      this.todosPacotes = response;
    });
  }

  getVeiculos(){
    this.veiculoService.getVeiculo().subscribe(response =>{
      this.veiculos = response;
    });
  }

  //chamar o primeiro slide
  primeiroSlide() {
    if (this.selectedIndex != this.tabsNumber) {
      this.selectedIndex = 0;
      this.label = 'Entregas';
    }
  }

  //chamar o segundo slide
  segundoSlide() {
    if (this.selectedIndex != this.tabsNumber) {
      this.selectedIndex = 1;
      this.label = 'Usuários';
    }
  }

  //chamar o terceiro slide
  terceiroSlide() {
    if (this.selectedIndex != this.tabsNumber) {
      this.selectedIndex = 2;
      this.label = 'Pacotes';
    }
  }

  //chamar o quarto slide
  quartoSlide() {
    if (this.selectedIndex != this.tabsNumber) {
      this.selectedIndex = 3;
      this.label = 'Veículos';
    }
  }
}
