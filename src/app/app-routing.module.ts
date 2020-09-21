import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { FormBoxComponent } from './form-box/form-box.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  { path: '', component: FormBoxComponent },
  { path: 'listado', component: ListadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
