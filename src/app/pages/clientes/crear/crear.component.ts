import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "../../../services/api.service";

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'] // Corrección de 'styleUrl'
})
export class CrearComponent implements OnInit {
  form!: FormGroup; // Asegúrate de inicializar con el signo '!' o inicializar en ngOnInit

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    // Inicialización del formulario
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Envía los datos del formulario a través del servicio API
      this.apiService.crearCliente(this.form.value).subscribe({
        next: (response: any) => {
          console.log('Cliente creado:', response);
          this.form.reset(); // Reinicia el formulario tras el envío
        },
        error: (error: any) => {
          console.error('Error al crear el cliente:', error);
        }
      });
    } else {
      console.error('El formulario no es válido');
    }
  }
}
