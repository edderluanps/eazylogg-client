import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo';
import { API_TEST_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private httpClient: HttpClient) { }

  getVeiculo() : Observable<Veiculo[]>{
    return this.httpClient.get<Veiculo[]>(`${API_TEST_URL}eazylogg/veiculo/`);
  }
}
