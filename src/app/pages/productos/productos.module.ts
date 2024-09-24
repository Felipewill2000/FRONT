import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListarComponent} from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { UsuariosModule } from '../usuarios/usuarios.module';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
  
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    ProductosRoutingModule,
    UsuariosModule
   
  ]
})
export class ProductosModule { }


