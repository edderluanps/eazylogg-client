import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_TEST_URL } from 'src/environments/environment';
import { Pacote } from '../models/pacote';

@Injectable({
  providedIn: 'root'
})
export class PacoteService {

  constructor(private httpClient: HttpClient) { }

  getPacotes() : Observable<Pacote[]>{
    return this.httpClient.get<Pacote[]>(`${API_TEST_URL}eazylogg/pacote/`);
  }

  getPacoteById(id: number){
    return this.httpClient.get(`${API_TEST_URL}eazylogg/pacote/${id}`);
  }

  getPesquisaPacote(pesquisa: string){
    return this.httpClient.get(`${API_TEST_URL}eazylogg/pacote/pesquisa?descricao=${pesquisa}`);
  }

}
