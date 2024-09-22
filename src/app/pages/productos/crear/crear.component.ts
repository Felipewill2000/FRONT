
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../../../services/api.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  productoForm: FormGroup; // Define el formulario

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // Inicializa el formulario con los campos necesarios
    this.productoForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    // Verifica si el formulario es válido antes de enviar
    if (this.productoForm.valid) {
      console.log('Datos a enviar:', this.productoForm.value);
      
      // Llamada al servicio para crear el producto
      this.apiService.crearProducto(this.productoForm.value).subscribe({
        next: (response) => {
          console.log('Producto creado con éxito', response);
          this.productoForm.reset(); // Reinicia el formulario tras el envío
        },
        error: (error) => {
          console.error('Error al crear el producto', error);
        }
      });
    }
  }
}
