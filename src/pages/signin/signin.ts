import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { ForgtpwdPage } from '../forgtpwd/forgtpwd';
import { GetstartPage } from '../getstart/getstart';

  

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  public data = {}; username;password;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

   forgtpwd() {
    this.navCtrl.push(ForgtpwdPage);
  }

 getstart() {
    this.navCtrl.push(GetstartPage);
  }
   
}
