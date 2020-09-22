import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteListadoRoutingModule } from './cliente-listado-routing.module';
import { ClienteListadoComponent } from './cliente-listado.component';


@NgModule({
  declarations: [ClienteListadoComponent],
  imports: [
    CommonModule,
    ClienteListadoRoutingModule
  ]
})
export class ClienteListadoModule { }
