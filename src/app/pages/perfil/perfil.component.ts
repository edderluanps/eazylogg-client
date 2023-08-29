import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/models/endereco';
import { EnderecoDTO } from 'src/app/models/endereco.dto';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioDTO } from 'src/app/models/usuario.dto';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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

  panelOpenState = false;

  showFiller = false;

  constructor(
    private storage: StorageService,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private router : Router) { }

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
      }else{
        this.router.navigate(['/login']);
      }
      this.getUserAllData();
      this.getEnderecoUser();
    }

    logout(){
      this.authService.logOut();
      this.router.navigate(['/login']);
    }

    getUserAllData(){
      let localUser = this.storage.getLocalUser();
      this.usuarioService.getUsuarioByEmail(localUser.email).subscribe(response => {
        this.user = response as Usuario;
      });
    }

    getEnderecoUser(){
      let localUser = this.storage.getLocalUser();

      if (localUser && localUser.email) {
        this.usuarioService.getUsuarioByEmail(localUser.email)
          .subscribe(response => {
            this.items = response['endereco'];
          });
      } else {

      }
    }

}
