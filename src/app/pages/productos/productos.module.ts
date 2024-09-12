import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListarComponent} from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { CategorizarComponent } from './categorizar/categorizar.component';
import { UsuariosModule } from '../usuarios/usuarios.module';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    CategorizarComponent
  ],
  imports: [ 
    CommonModule,
    ProductosRoutingModule,
    UsuariosModule
   
  ]
})
export class ProductosModule { }


