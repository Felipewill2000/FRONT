
// formulario.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent {
  ngForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.ngForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }

  onSubmit() {
    // Manejar el envío del formulario aquí
    console.log('Formulario enviado', this.ngForm);
  }
}