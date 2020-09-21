import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  providers: [FirebaseService]
})
export class ListadoComponent implements OnInit {

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
