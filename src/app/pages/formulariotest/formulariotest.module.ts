import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormulariotestRoutingModule } from './formulariotest-routing.module';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormulariotestRoutingModule
  ]
})
export class FormulariotestModule { }
