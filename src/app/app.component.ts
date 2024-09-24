import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  public datos: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {  // El método ngOnInit no debe recibir ningún parámetro
    this.apiService.getData().subscribe(  // Aquí llamamos a getData sin parámetros
      (response: any) => { 
        this.datos = response;  // Almacenar los datos en la variable
      },
      (error: any) => {  
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
