import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearusComponent } from './crear/crearus.component';
import { ListarusComponent } from './lista/listarus.component';  

const routes: Routes = [
  {path: 'crear', component: CrearusComponent},
  {path: 'lista', component: ListarusComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }


