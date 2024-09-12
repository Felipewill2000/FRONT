import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CrearusComponent } from './crear/crearus.component';
import { ListarusComponent } from './lista/listarus.component';

@NgModule({
  declarations: [
    CrearusComponent,
    ListarusComponent
  ],
  imports: [
  

   CommonModule,
    ReactiveFormsModule, // Asegúrate de que ReactiveFormsModule está aquí
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }








