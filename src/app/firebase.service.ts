import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBvf077X04CRc-H0c29qIt5MTjy_ib6c0g",
  authDomain: "examen-csti.firebaseapp.com",
  databaseURL: "https://examen-csti.firebaseio.com",
  projectId: "examen-csti",
  storageBucket: "examen-csti.appspot.com",
  messagingSenderId: "388543405071",
  appId: "1:388543405071:web:f6d202e6d056f5a1db577a"
};

import ClienteInterfaces from './interfaces/clientes'

firebase.initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  fb = null

  constructor() { }

  addRegister(cliente: ClienteInterfaces){
    const unixtime = Date.now()
    return firebase
    .database()
    .ref('clientes/' + unixtime)
    .set(cliente)
  }

  onChange(fn){
    // firebase
    // .database()
    // .ref('clientes/cliente')
    // .on('value', response => {
    //   var val = response.val()
    //   fn(Object.values(val))
    // });
  }
}
