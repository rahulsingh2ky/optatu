import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';





/**
 * Generated class for the ChangepwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-changepwd',
  templateUrl: 'changepwd.html',
})
export class ChangepwdPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepwdPage');
  }

  changepwd() {
    this.navCtrl.push(ChangepwdPage);
  }

   

}
