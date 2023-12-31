import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { LocalUser } from '../pages/login/local_user';
import { API_TEST_URL } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private httpClient: HttpClient,
    public storage : StorageService) { }

  authenticate(credenciais: CredenciaisDTO){
    return this.httpClient.post(`${API_TEST_URL}login`, credenciais, {
      observe: 'response',
      responseType: 'text'
    });
  }

  successfulLogin(authorizationValue : string){
    let tok = authorizationValue.substring(7);
    let user : LocalUser = {
      token: tok, email: this.jwtHelper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
  }

  logOut(){
    let user : LocalUser = {
      token: '',
      email: ''
    }
    this.storage.setLocalUser(user);
  }

}
