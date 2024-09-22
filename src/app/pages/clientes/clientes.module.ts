import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    CrearComponent ,
    ListarComponent
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    
    ClientesRoutingModule,
    

  ]

})
export class ClientesModule { }









