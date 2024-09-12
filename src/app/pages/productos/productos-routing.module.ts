import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { CategorizarComponent } from './categorizar/categorizar.component';

const routes: Routes = [

  {path: 'listar', component: ListarComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'categorizar', component: CategorizarComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
