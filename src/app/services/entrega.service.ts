import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrega } from '../models/entrega';
import { API_TEST_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  constructor(private httpClient: HttpClient) { }

  getEntregas() : Observable<Entrega[]>{
    return this.httpClient.get<Entrega[]>(`${API_TEST_URL}eazylogg/entrega/`);
  }

  getEntregaById(id: number){
    return this.httpClient.get(`${API_TEST_URL}eazylogg/entrega/${id}`);
  }
}
