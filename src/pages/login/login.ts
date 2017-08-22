import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Slides } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements AfterViewInit{
  @ViewChild(Slides) slides: Slides;
  clave: string = 'camilo';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private usuario: UsuarioProvider) {
  }

  ngAfterViewInit(){
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
    this.slides.paginationType = 'progress';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  /**
   * Verifica si la clave es valida
   */
  continuar(){
    this.usuario.verificarUsuario(this.clave);
  }

  ingresar(){

  }

}
