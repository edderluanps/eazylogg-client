import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredenciaisDTO } from '../pages/login/credenciais.dto';
import { LocalUser } from '../pages/login/local_user';
import { API_TEST_URL } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, public storage : StorageService) { }

  authenticate(credenciais: CredenciaisDTO){
    return this.httpClient.post(`${API_TEST_URL}login`, credenciais, {
      observe: 'response',
      responseType: 'text'
    });
  }

  successfulLogin(authorizationValue : string){
    let tok = authorizationValue.substring(7);
    let user : LocalUser = {
      token: tok
    };
    this.storage.setLocalUser(user);
  }

  /**
  logout(){
    this.storage.setLocalUser(null);
  }
  **/
}
