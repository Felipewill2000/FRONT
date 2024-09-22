import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  // Método para crear un producto
  crearProducto(productoData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/productos/crear`, productoData); // Ajusta la URL según tu backend
  }

  // Método para crear un usuario
  crearUsuario(usuarioData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, usuarioData);
  }

  // Método para crear un cliente
  crearCliente(clienteData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clientes/crear`, clienteData);
  }

  // Método para obtener datos
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }
}
