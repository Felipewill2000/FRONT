import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearus',
  templateUrl: './crearus.component.html',
  styleUrl: './crearus.component.scss'
})
export class CrearusComponent {
  form: FormGroup; 
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    // Manejar el envío del formulario aquí
    console.log('Formulario enviado', this.form);
  }
}




