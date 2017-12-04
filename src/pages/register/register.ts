import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }
  public data:any = {};

  reg(){

    alert(JSON.stringify(this.data));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


   

}
