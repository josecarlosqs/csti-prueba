import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteFormularioRoutingModule } from './cliente-formulario-routing.module';
import { ClienteFormularioComponent } from './cliente-formulario.component';


@NgModule({
  declarations: [ClienteFormularioComponent],
  imports: [
    CommonModule,
    ClienteFormularioRoutingModule
  ]
})
export class ClienteFormularioModule { }
