import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router

// import { FormBoxComponent } from './form-box/form-box.component';
// import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  { path: 'formulario', loadChildren: () => import('./cliente-formulario/cliente-formulario.module').then(m => m.ClienteFormularioModule) },
  { path: 'listado', loadChildren: () => import('./cliente-listado/cliente-listado.module').then(m => m.ClienteListadoModule) }
  // { path: '', component: FormBoxComponent },
  // { path: 'listado', component: ListadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
