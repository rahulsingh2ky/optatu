import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from '../register/register';


/**
 * Generated class for the ForgtpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-forgtpwd',
  templateUrl: 'forgtpwd.html',
})
export class ForgtpwdPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgtpwdPage');
  }

  forgtpwd() {
    this.navCtrl.push(ForgtpwdPage);
  }

   

}
