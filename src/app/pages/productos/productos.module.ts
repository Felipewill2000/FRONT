import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import{ListarComponent} from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { CategorizarComponent } from './categorizar/categorizar.component';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    CategorizarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
