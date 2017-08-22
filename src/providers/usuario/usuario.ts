import { Injectable } from '@angular/core';


import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UsuarioProvider {

  constructor(private afDB: AngularFireDatabase) {
    console.log('Hello UsuarioProvider Provider');
  }

  verificarUsuario(clave: string){
    //clave = clave.toLowerCase();
    this.afDB.list(`/usuarios/${clave}`)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
