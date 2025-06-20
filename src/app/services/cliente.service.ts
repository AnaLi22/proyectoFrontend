import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteResponse } from '../models/clienteResponse.model';
import { ClienteRequest } from '../models/clienteRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl: string = environment.apiUrl + 'clientes/';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ClienteResponse[]> {
    return this.http.get<ClienteResponse[]>(this.apiUrl);
  }

  postCliente(cliente: ClienteRequest): Observable<ClienteResponse> {
    return this.http.post<ClienteResponse>(this.apiUrl, cliente);
  }

  putCliente(cliente: ClienteRequest, clienteId: number): Observable<ClienteResponse> {
    return this.http.put<ClienteResponse>(`${this.apiUrl}${clienteId}`, cliente)
  }

  deleteCliente(clienteId: number): Observable<ClienteResponse> {
    return this.http.delete<ClienteResponse>(`${this.apiUrl}${clienteId}`);
  }

}
