import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss'],
  providers: [FirebaseService]
})


export class ClienteFormularioComponent implements OnInit {

  constructor(
    private fb: FirebaseService
  ) {
  }

  nombre: string = ""
  apellido: string = ""
  edad: number = null
  nacimiento:Date = null

  loading = false;


  registerItem(e:Event): void {
    e.preventDefault();
    this.loading = true
    this.fb.addRegister({
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      nacimiento: this.nacimiento
    })
    .then(
      () => {
        this.loading = false

        this.nombre = ""
        this.apellido = ""
        this.edad = 0
        this.nacimiento = null
      },
      () => {
        this.loading = false
      }
    )
  }
      
  ngOnInit(): void {

    // this.startPlaceholderSwitcher()
  }

  toInt(str): Number{
    return parseInt(str) 
  }

}
