import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-cliente-listado',
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./cliente-listado.component.scss'],
  providers: [FirebaseService]
})
export class ClienteListadoComponent implements OnInit {

  constructor(
    private fb: FirebaseService
  ) {
  }

  lista = []
  ngOnInit(): void {
    this.fb.onChange(lista => {
      this.lista = lista
    })
  }

}
