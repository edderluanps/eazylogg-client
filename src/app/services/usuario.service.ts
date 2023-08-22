import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_TEST_URL } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  getUsuario() : Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${API_TEST_URL}eazylogg/usuario/`);
  }

  getUsuarioById(id: number){
    return this.httpClient.get(`${API_TEST_URL}eazylogg/usuario/${id}`);
  }

  getUsuarioEntregador(){
    return this.httpClient.get(`${API_TEST_URL}eazylogg/usuario/entregadores?categoria=entregador`);
  }

  getPesquisaUsuario(pesquisa: string){
    return this.httpClient.get(`${API_TEST_URL}eazylogg/usuario/pesquisa?pesquisa=${pesquisa}&categoria=Entregador`);
  }

}
