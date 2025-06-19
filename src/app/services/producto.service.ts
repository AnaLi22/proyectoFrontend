import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productoResponse } from '../models/pedidoResponse.model';
import { productoRequest } from '../models/pedidoRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl: string = environment.apiUrl + '/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<productoResponse[]> {
    return this.http.get<productoResponse[]>(this.apiUrl);
  }

  postProductos(producto: productoRequest): Observable<productoResponse> {
    return this.http.post<productoResponse>(this.apiUrl, producto);
  }

  putProductos(producto: productoRequest, productoId: number): Observable<productoResponse> {
    return this.http.put<productoResponse>(`${this.apiUrl}/${productoId}`, producto);
  }

  deleteProductos(productoId: number): Observable<productoResponse> {
    return this.http.delete<productoResponse>(`${this.apiUrl}/${productoId}`);
  }
}
