import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-crearus',
  templateUrl: './crearus.component.html',
  styleUrls: ['./crearus.component.scss'],
})
export class CrearusComponent implements OnInit {
  usuarioForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }
  

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      // Envía los datos del formulario a través del servicio API
      this.apiService.crearUsuario(this.usuarioForm.value).subscribe({
        next: (response: any) => {
          console.log('Usuario creado con éxito:', response);
          this.usuarioForm.reset(); // Reinicia el formulario tras el envío
        },
        error: (error: any) => {
          console.error('Error al crear el usuario:', error);
        }
      });
    } else {
      console.error('El formulario no es válido');
    }
  }
}
